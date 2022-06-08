const { expect } = require('chai');
const testNeutralidade = require('../testNeutralidade');
const lerArquivo = require('../arquivox');
const sinon = require('sinon');
const fs = require('fs');
const CONTEUDO_DO_ARQUIVO = 'isso é uma string';

describe('1 - Retorna a string correta para cada valor', () => {
  it('Retorna uma string', () => {
    const output = testNeutralidade(-1);
    expect(output).to.be.a('string');
  });
  it('Retorna a string negativa', () => {
    const output = testNeutralidade(-1);
    expect(output).to.be.equals('negativo');
  });
  it('Retorna a string positiva', () => {
    const output = testNeutralidade(1);
    expect(output).to.be.equals('positivo');
  });
  it('Retorna a string neutra', () => {
    const output = testNeutralidade(0);
    expect(output).to.be.equals('neutro');
  });
});
describe('3 - Retorna mensagem de erro se o valor não for do tipo Number', () => {
  it('Retorna o valor inserido não é um numero', () => {
    const output = testNeutralidade('claudio');
    expect(output).not.to.be.a('number');
  });
});

describe('4 - ArquivoX', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });
  // after(() => {
  //   fs.writeFileSync.restore();
  // });
  describe('Quando o arquivo existe', () => {
    it('Arquivo lido com sucesso', () => {
      const output = lerArquivo('arquivox.txt');
      expect(output).to.be.a('string');
    });
    it('Escrita concluída', () => {
      const output = lerArquivo('arquivox.txt', CONTEUDO_DO_ARQUIVO);
      expect(output).to.be.equals('ok');
    });
  });
  describe('Quando o arquivo não existe', () => {
    describe('Arquivo não lido', () => {
      afterEach(() => {
        fs.writeFileSync.restore();
        it('Null', () => {
          const output = lerArquivo('arquivox.txt');
          expect(output).to.be.equals(null);
        });
      });
    });
  });
});