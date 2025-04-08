import React, { useState } from 'react';

const Calculadora = () => {
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [operacao, setOperacao] = useState('soma');
  const [resultado, setResultado] = useState('');

  const calcular = () => {
    const num1 = parseFloat(valor1);
    const num2 = parseFloat(valor2);

    if (isNaN(num1) || isNaN(num2)) {
      setResultado('Por favor, insira dois números válidos.');
      return;
    }

    let resultadoFinal;

    switch (operacao) {
      case 'soma':
        resultadoFinal = num1 + num2;
        break;
      case 'subtracao':
        resultadoFinal = num1 - num2;
        break;
      case 'multiplicacao':
        resultadoFinal = num1 * num2;
        break;
      case 'divisao':
        if (num2 === 0) {
          resultadoFinal = 'Erro: Não é possível dividir por zero.';
        } else {
          resultadoFinal = num1 / num2;
        }
        break;
      default:
        resultadoFinal = 'Operação inválida';
    }

    setResultado(`Resultado: ${resultadoFinal}`);
  };

  const limpar = () => {
    setValor1('');
    setValor2('');
    setOperacao('soma');
    setResultado('');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Calculadora Simples</h1>

      <label htmlFor="valor1">Valor 1:</label>
      <input
        type="number"
        id="valor1"
        value={valor1}
        onChange={(e) => setValor1(e.target.value)}
        required
      />
      <br /><br />

      <label htmlFor="valor2">Valor 2:</label>
      <input
        type="number"
        id="valor2"
        value={valor2}
        onChange={(e) => setValor2(e.target.value)}
        required
      />
      <br /><br />

      <label htmlFor="operacao">Operação:</label>
      <select
        id="operacao"
        value={operacao}
        onChange={(e) => setOperacao(e.target.value)}
      >
        <option value="soma">Soma</option>
        <option value="subtracao">Subtração</option>
        <option value="multiplicacao">Multiplicação</option>
        <option value="divisao">Divisão</option>
      </select>
      <br /><br />

      <button onClick={calcular}>Calcular</button>
      <button onClick={limpar}>Limpar</button>

      <p>{resultado}</p>
    </div>
  );
};

export default Calculadora;
