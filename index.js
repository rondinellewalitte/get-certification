const axios = require('axios').default;
var FormData = require('form-data');

const list = [24, 25];

const curso_id = 99;


const config = {
  headers: {
    'Content-Type': 'multipart/form-data; boundary=X-INSOMNIA-BOUNDARY',
  }
};

(async function () {
  for await (id of list) {
    var bodyFormData = new FormData();
    bodyFormData.append('curso_id', curso_id);
    bodyFormData.append('aluno_id', id);
    bodyFormData.append('media_final', '10');
    bodyFormData.append('iniciado', '2022-11-11+14:30:05');
    bodyFormData.append('concluido', '2022-02-10+14:30:05');
    bodyFormData.append('envio', 'on');/* Enviar para email, remover essa linha */

    const { data } = await axios.post('https://saeecopuff.com.br/certificate/registerCertificate/adm/', bodyFormData, config);
    console.log(data.alert);

    validAjax("Cadastro", data, true);
  }
})();




