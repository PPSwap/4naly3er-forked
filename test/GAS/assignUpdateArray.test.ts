import main from '../base';

main(
  '`array[index] += amount` is cheaper than `array[index] = array[index] + amount` (or related variants)',
  'assignUpdateArray.sol',
);