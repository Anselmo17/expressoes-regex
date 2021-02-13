/***********
   FUNCOES USANDO REGEX PARA VALIDACAO
  
 */


/*************
    MASKARA PARA CPF
 **************/

const formataCPF = (cpf) => { // formata cpf
  const regex = /^(\d{3})(\d{3})(\d{3})(\d{2})$/;
  // numero cpf
  const numFormatado = cpf.toString();
  // coloca maskara cpf
  const result = numFormatado.replace(regex, '$1.$2.$3-$4');
  console.log('CPF: ', result);
}
// chamando funcao CPF
formataCPF(33345678901);


/*************
    MASKARA PARA CNPJ
 **************/
const formataCNPJ = (cnpj) => { 
// formata CNPJ
  const regex = /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/;
  // numero CNPJ
  const numFormatado = cnpj.toString();
  // coloca maskara CNPJ
  const result = numFormatado.replace(regex, '$1$2$3/$4-$5');
  console.log('CNPJ: ', result);
}
// chamando funcao CNPJ
formataCNPJ(14397462000109);


// formata cep
const formataCEP = (cep) => {
  const regex = /^(\d{5})(\d{3})$/;
  // remove tudo q nao é numero
  const isRemoveNotNumber = /[^0-9\.]+/g;
  // numero cep
  const numFormatado = cep.toString();

  // test cep
  if (!regex.test(cep)) {
    console.log('Cep invalido !!!');
    return;
  };

  // colocando maskara cep
  const result = numFormatado.replace(isRemoveNotNumber, '').replace(regex, '$1-$2');
  console.log('CEP: ', ! result ? 'Isso nao é valido.' : result);
}

// chamando funcao CEP
formataCEP('66767789');



const validaEmail = (email) => {
// regex validacao
  const regex = /[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
  // test email
  if (!regex.test(email)) {
    console.log('Email invalido !!!');
    return;
  };
  // mostra o email
  console.log('Email : ', email);
}

validaEmail('test@hotmail.com.br');