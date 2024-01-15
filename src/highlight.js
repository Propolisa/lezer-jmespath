import { styleTags, tags as t } from "@lezer/highlight"

export const jmespathHighlighting = styleTags({
  // Style specific tokens within expressions and structures
  "Identifier/UnquotedString": t.variableName, // For individual identifiers
  "FunctionExpression/UnquotedString": t.function(t.variableName), // Function names within FunctionExpression
  "ComparatorExpression/Comparator": t.compareOperator, // Comparison operators within ComparatorExpression
  "KeyValExpr/Identifier/...": t.propertyName,
  "LParen RParen": t.paren,
  "LazyEval": t.typeOperator,
  "KeyValExpr/Colon": t.punctuation,
  "Delimiter": t.derefOperator, // Dot punctuation in SubExpressions
  "Wildcard": t.special(t.variableName), // Style the wildcard character
  "Number": t.number, // Number literals
  "String": t.string, // String literals
  "Boolean": t.bool, // Boolean literals
  "FilterExpression": t.derefOperator,
  "RawString/...": t.string,
  "Null": t.null, // Null literals
  "PropertyName": t.propertyName, // Property names
  "MultiSelectList": t.list, // Apply style to everything within MultiSelectList
  "MultiSelectHash": t.brace, // Apply style to everything within MultiSelectHash
  "IndexExpression/BracketSpecifier": t.squareBracket, // Style all within BracketSpecifier in IndexExpression
  "SliceExpression": t.angleBracket, // Style all within SliceExpression
  "CurrentNode": t.self,

  // Style logical operators and other specific tokens
  "AndExpression/And": t.logicOperator,
  "OrExpression/Or": t.logicOperator,
  "NotExpression/UnaryNot": t.logicOperator,
  "PipeExpression/Pipe": t.operator,

  // Punctuation and structural elements
  "LParen RParen": t.paren,
  "RBracket LBracket": t.squareBracket,
  "{ }": t.brace,
  ",": t.separator,
})