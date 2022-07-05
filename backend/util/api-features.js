class Apifeature {
  constructor(query, querystr) {
    this.query = query;
    this.querystr = querystr;
  }

  // search feature
  search() {
    const keyword = this.querystr.keyword
      ? // if we have a value in keyword
        {
          // using name to search
          name: {
            $regex: this.querystr.keyword, // mongodb operator regex
            $options: "i", // options for case insensitive search for both capital and small
          },
        }
      : // if we dont have a value in keyword
        {};
    // making product find method with a keyword
    this.query = this.query.find({ ...keyword });
    return this;
  }

  filter() {
    const querycopy = { ...this.querystr };

    // emoving fields from query string and category to query String
    const removeFields = ["keyword", "page", "limit"];

    // using for each to iterate through removfields and deleting fields
    removeFields.forEach((key) => delete querycopy[key]);

    // filter for Pricing and Rating

    let querystr = JSON.stringify(querycopy);
    querystr = querystr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);

    this.query = this.query.find(JSON.parse(querystr));
    return this;
  }

  pagination(resultPerPage) {
    // getting currentpage from current Page
    const curntPage = Number(this.querystr.page) || 1;

    // logic to skip records according to page number
    const skip = resultPerPage * (curntPage - 1);

    // add limit to product.find  according to result per page and skipping records according to page nmber
    this.query = this.query.limit(resultPerPage).skip(skip);
    return this;
  }
}

module.exports = Apifeature;
