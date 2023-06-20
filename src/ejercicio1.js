let contador = {
  valor: 0,
  siguiente: function () {
    this.valor =this.valor+1;
    return this.valor;
    // Inserte el código aquí
  },
};
console.log(contador.siguiente())
export { contador }