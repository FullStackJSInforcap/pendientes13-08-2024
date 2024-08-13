
const iffe = (() => {
    let global = 'hola';
    console.log(global);
    return {
        devolverGlobal(){
            return global;
        }
    }
})();

