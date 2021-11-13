window.onload = function () {
  document.getElementById("rate").oninput = function () {
    let value = (
      ((this.value - this.min) / (this.max - this.min)) *
      100
    ).toFixed(2);
    this.style.background =
      "linear-gradient(to right, #0056d2 0%, #0056d2 " +
      value +
      "%, #fff " +
      value +
      "%, white 100%)";
    document.getElementById("rate_val").textContent = this.value + "%";
  };
  compute(); 
};


  function compute() {
    const principal = document.getElementById("principal").value;
    const rate = document.getElementById("rate").value;
    const time = document.getElementById("years").value;


    if(!principal){
        alert("Enter Positive Number")
        return;}

    const result = (principal * rate * time) / 100;

    const output =
      `<p> If you deposit <span class='tagged'>${principal}</span>, <br />` +
      `at an interest rate of <span class='tagged'>${rate}%</span>. <br />` +
      `You will receive an amount of <span class='tagged'>${result}</span>, <br />` +
      `in the year <span class='tagged'>${
        new Date().getFullYear() + +time
      }</span> </p>`;

    document.getElementById("result").innerHTML = output;
    document.getElementById("principal").focus();
  }
