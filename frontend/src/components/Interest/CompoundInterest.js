import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";

const CompoundInterest = () => {
  const principal = 10000;
  const time = 5;
  const rate = 12.0;
  const compoundInterest = (p, t, r) => {
    const amount = p * Math.pow(1 + r / 100, t);
    return amount;
  };
  console.log(compoundInterest(principal, time, rate));

  const [p, setP] = useState();
  const [r, setR] = useState();
  const [t, setT] = useState();
  const [total, setTotal] = useState();

  const handleInterest = () => {
    setTotal(p * Math.pow(1 + r / 100, t));
  };
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", width: "40vw" }}>
        <TextField
          name="p"
          type="number"
          label="principal"
          value={p}
          onChange={(e) => setP(e.target.value)}
        />
        <TextField
          type="number"
          name="r"
          label="interest"
          value={r}
          onChange={(e) => setR(e.target.value)}
        />
        <TextField
          name="t"
          type="number"
          label="time"
          value={t}
          onChange={(e) => setT(e.target.value)}
        />
        <Button color="secondary" variant="contained" onClick={handleInterest}>
          Calculate
        </Button>

        <Box
          sx={{
            background: "black",
          }}
        >
          {Math.ceil(total)}
        </Box>
      </Box>
    </>
  );
};

export default CompoundInterest;
