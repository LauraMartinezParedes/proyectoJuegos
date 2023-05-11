
// export const typePokemon = (data) =>{
//     const counterType = [];
//     data.map((element, index)=>{
//        element.type.map((tipo)=>{
//         if (!counterType.includes(tipo.type.name))
//         counterType.push(tipo.type.name)
//        })
    
//     });
// return counterType;
// }
export const typePokemon = (data) => {
const nameTypeReapet = [];
data.forEach((element) => {
  element.type.forEach((singleType) => {
    !nameTypeReapet.includes(singleType.type.name) &&
      nameTypeReapet.push(singleType.type.name);
  });
});
return nameTypeReapet;
};

