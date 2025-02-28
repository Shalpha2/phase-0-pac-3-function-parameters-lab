
function introduction(name) {
    return `Hi, my name is ${name}.`;
  }
  console.log(introduction("Alice")); 
  
  
  function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  console.log(introductionWithLanguage("Alice", "Python"));
  
  
  function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  console.log(introductionWithLanguageOptional("Alice")); 
  console.log(introductionWithLanguageOptional("Bob", "Ruby")); 
  