import api from "../api";

let token = "F1ADF968BFB559B6F3E8C5DF7110E4BB7D1B001BAA088118AFFF7E65F3C0C167";

// middleware para fazer as requisições e tratamento de reposta do IUGU
class InvoiceServer {
  static async PostInvoice(email, cnpj, produto) {
    console.log("email");
    console.log(email);
    console.log("cnpj");
    console.log(cnpj);
    console.log("produto");
    console.log(produto);
    let config = {
      headers: {
        Authorization: `Basic ${token}`,
        "Access-Control-Allow-Origin": "*",
        "content-type": "application/json;",
        "content-type": "text/plain"
      },
    };
    let body = {
      restrict_payment_method: true,
      email: "danrley.pereira@compuletra.com.br",
      due_date: "2021-08-25",
      payer: {
        cpf_cnpj: "05815705101",
        name: "Danrley Pereira",
        address: {
          zip_code: "72.410-702",
          number: "12",
        },
        ensure_workday_due_date: true,
      },
      items: [
        {
          description: "pix - teste 03",
          price_cents: 45000,
          quantity: 1,
        },
      ],
    };
    let resposta;
    await api.post(`invoices`, body, config).then((res) => {
      resposta = res.data;
    });
    return resposta;
  }
}

export default InvoiceServer;
