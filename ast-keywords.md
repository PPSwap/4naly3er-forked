## AST keywords

```
nodeType === 'MemberAccess'
'IndexAccess'
Literal
RevertStatement
ContractDefinition
FunctionDefinition
ExpressionStatement
Assignment
EventDefinition

node.memberName === 'balance'

!node.arguments?.[1]

node.expression.nodeType === 'FunctionCall'
Identifier

node.expression.name === 'require'

node.expression.typeDescriptions.typeString === 'address'

node.indexExpression?.nodeType === 'Literal'

node.errorCall.expression.nodeType !== 'Identifier'
!node.errorCall.expression.name

op.rightHandSide.nodeType === 'Identifier'
BinaryOperation

bin.rightExpression.nodeType === 'Identifier'

decl.initialValue?.nodeType === 'Identifier'

node.leftHandSide.baseExpression.nodeType === 'Identifier'

node.leftHandSide.indexExpression?.nodeType === 'Literal'

node.rightHandSide.rightExpression.baseExpression.nodeType === 'Identifier'

event.parameters.parameters
```