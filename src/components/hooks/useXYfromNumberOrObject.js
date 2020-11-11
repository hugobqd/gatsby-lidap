const useXYfromNumberOrObject = (gap, axe, multi = 1) => {
  /* 
  Pour obtenir une valeur en x et en y d'un numéro ou d'un object. Miltiplié si 
  */

  // Validation
  if (
    !(typeof gap === "number" || (typeof gap === "object" && gap.length === 2))
  ) {
    console.error(
      `useNumberOrObject(gap, axe, multi): \n'gap' must be a Number or an Object of 2 number .\n'${gap}' is not permitted.`
    );
  }
  if (!(axe === "y" || axe === "x")) {
    console.error(
      `useNumberOrObject(gap, axe, multi): \n'axe' must be 'x' or 'y. \n'${axe}' is not permitted.`
    );
  }
  if (typeof multi !== "number") {
    console.error(
      `useNumberOrObject(gap, axe, multi): \n'multi' is optionnal or a number. \n'${multi}' is not permitted.`
    );
  }

  // Sortie
  if (typeof gap === "number") {
    return multi * gap;
  }
  if (typeof gap === "object" && axe === "x") {
    return multi * gap[0];
  }
  if (typeof gap === "object" && axe === "y") {
    return multi * gap[1];
  }
};
export default useXYfromNumberOrObject;
