const { combineUsers } = require('../index');

describe('combineUsers Function', () => {
  test('return should be an object', () => {
    const result = combineUsers(['user1'], ['user2']);
    expect(typeof result).toBe('object');
    expect(Array.isArray(result)).toBe(false);
  });

  test('return should have users and merge_date properties', () => {
    const result = combineUsers(['user1'], ['user2']);
    expect(result).toHaveProperty('users');
    expect(result).toHaveProperty('merge_date');
  });

  test('should merge all given arrays', () => {
    const result = combineUsers(['Alice', 'Bob'], ['Charlie'], ['Diana']);
    expect(result.users).toEqual(['Alice', 'Bob', 'Charlie', 'Diana']);
  });

  test('should contain todays date', () => {
    const result = combineUsers(['test']);
    expect(result.merge_date).toBeDefined();
    expect(typeof result.merge_date).toBe('string');
  });
});
