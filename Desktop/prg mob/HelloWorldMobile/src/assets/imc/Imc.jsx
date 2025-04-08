import React, { useState } from 'react';

const CalculadoraIMC = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState('');
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);

 
    if (isNaN(pesoNum) || isNaN(alturaNum) || alturaNum === 0) {
      setClassificacao('Por favor, insira valores válidos!');
      setImc('');
      return;
    }

  
    const imcCalculado = pesoNum / (alturaNum * alturaNum);
    setImc(imcCalculado.toFixed(2));  

    
    if (imcCalculado < 16) {
      setClassificacao('Magreza extrema');
    } else if (imcCalculado >= 16 && imcCalculado < 17) {
      setClassificacao('Magreza moderada');
    } else if (imcCalculado >= 17 && imcCalculado < 18.5) {
      setClassificacao('Magreza leve');
    } else if (imcCalculado >= 18.5 && imcCalculado < 25) {
      setClassificacao('Saudável');
    } else if (imcCalculado >= 25 && imcCalculado < 30) {
      setClassificacao('Sobrepeso');
    } else if (imcCalculado >= 30 && imcCalculado < 35) {
      setClassificacao('Obesidade grau 1');
    } else if (imcCalculado >= 35 && imcCalculado < 40) {
      setClassificacao('Obesidade grau 2');
    } else {
      setClassificacao('Obesidade grau 3');
    }
  };

  const limparCampos = () => {
    setPeso('');
    setAltura('');
    setImc('');
    setClassificacao('');
  };

  return (
    <div>
      <h1>Calculadora de IMC</h1>
      
      <div>
        <label>Peso (kg):</label>
        <input
          type="number"
          value={peso}
          onChange={(e) => setPeso(e.target.value)} 
          placeholder="Digite seu peso"
        />
      </div>

      <div>
        <label>Altura (m):</label>
        <input
          type="number"
          value={altura}
          onChange={(e) => setAltura(e.target.value)} 
          placeholder="Digite sua altura"
        />
      </div>

      <button onClick={calcularIMC}>Calcular IMC</button>
      <button onClick={limparCampos}>Limpar</button>

      {imc && (
        <div>
          <p>Seu IMC é: {imc}</p>
          <p>Classificação: {classificacao}</p>
        </div>
      )}
    </div>
  );
};

export default CalculadoraIMC;
