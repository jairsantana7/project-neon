window.onload = () => {
  var tr = document.querySelectorAll("form tr td input");

  var td = document.querySelectorAll("form tr");

  let tdnew = Array.from(tr);

  td.forEach((prod, index) => {
    let item2 = prod.querySelectorAll("td:nth-child(3) input");

    let preco = prod.querySelectorAll("td:nth-child(5) input[type='text' i]");

    let precoPromocao = prod.querySelectorAll(
      "td:nth-child(6) input[type='text' i]"
    );

    let codigo = prod.querySelectorAll("td:nth-child(2) b");

    let nome = prod.querySelectorAll("td:nth-child(3) input[type='text' i]");

    let input0 = Array.from(codigo);
    let input1 = Array.from(nome);
    let input2 = Array.from(preco);
    let input3 = Array.from(precoPromocao);

    for (var value of input1.values()) {
      console.log(value.defaultValue);
      value.insertAdjacentElement;
    }

    for (var value of input0) {
      console.log(value);
    }

    //   let p = `R$ ${value.defaultValue }; `

    // let div = document.querySelector('.content');

    // conteudo = document.createTextNode(p)

    // div.appendChild(conteudo);

    // console.log(conteudo);

    let obj = item2;

    console.log();

    //             let test = text.getAttribute("name");

    // console.log(test);

    //   console.log(text[0]);
  });
};

// tdnew.forEach((test, index) => {

//    let dois = test.value

//   let produto = test[index];

//   let valor = new Array(test);

//   console.log(`${dois} `);

// });

<table>
  <tbody>
    <thead></thead>
    <tr>
      <td></td>
    </tr>
    <tr></tr>
    <tr></tr>
    <tr></tr>
    <tr></tr>
  </tbody>
</table>;
