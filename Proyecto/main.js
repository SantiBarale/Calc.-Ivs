function res(){
    var atq = document.getElementById("atq").value;

    var def = document.getElementById("def").value;

    var ps = document.getElementById("ps").value;

    var rest = (( parseInt(atq) + parseInt(def) + parseInt(ps) ) * 100) / 45;

    var rest = Math.ceil(rest)

    // El "parseInt()" sirve para convertir en entero un numero //
    // El "Math.ceil()" sirve para redondear para arriba //

    document.write("Resultado = " + rest + "%");
}