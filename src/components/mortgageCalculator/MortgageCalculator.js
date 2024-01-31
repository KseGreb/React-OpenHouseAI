//Installation npm install @mui/material @emotion/react @emotion/styled
//from https://mui.com/material-ui/


//https://www.freecodecamp.org/news/react-mortgage-calculator-tutorial-for-beginners/

import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import Result from "./Result";
import SliderSelect from "./SliderSelect";
import TenureSelect from "./TenureSelect";

function MortgageCalculator() {
  const [data, setData] = useState({
    homeValue: 300000,
    downPayment: 300000 * 0.2,
    loanAmount: 300000 * 0.8,
    loanTerm: 5,
    interestRate: 5,
    // monthlyPayment: 0,
  });


  return (
    <div className="App">
      
      <Container maxWidth="xl" sx={{marginTop:4}}>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6}>
            <SliderSelect data={data} setData={setData} />
            <TenureSelect data={data} setData={setData}/>
          </Grid>
          <Grid item xs={12} md={6}>
            <Result data={data}/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default MortgageCalculator;