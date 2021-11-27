let IR;
let INSS;

salárioBruto = 1176;

if (salárioBruto <= 1156.94){
    INSS = salárioBruto * 0.08;
}
else if (salárioBruto >= 1556.95 && salárioBruto <= 2594.92){
    INSS = salárioBruto * 0.09;
}
else if (salárioBruto >= 2594,93 && salárioBruto <= 5189.82){
    INSS = salárioBruto * 0.11;
}
else
    INSS = salárioBruto - 570.88;

let salárioBase = salárioBruto - INSS;

if (salárioBase <= 1903.98){
    IR = 0;
}
else if (salárioBase >= 1903.99 && salárioBase <= 2826.65){
    IR = (salárioBase * 0.075) - 142.80; 
}
else if (salárioBase >= 2826.66 && salárioBase <= 3751.05){
    IR = (salárioBase * 0.15) - 354.80;
}
else if (salárioBase >= 3751.06 && salárioBase <= 4664,68){
    IR = (salárioBase * 0.225) - 636.13;
}
else
    IR = (salárioBase * 0.275) - 869.36;

    console.log("Salário Líquido = R$ " + (salárioBase.toFixed(2) - IR) + " (Impostos: INSS = R$ " + INSS.toFixed(2) + " | IR = R$ " + IR.toFixed(2) + ")");