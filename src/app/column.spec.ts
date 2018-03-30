import { Column } from './column';

describe('Column', () => {
  it('should create an instance', () => {
    expect(new Column()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let column = new Column({
      id: 0,
      index: 0,
      title: 'primary column',
      primary: true,
      type: 'string'
    });
    expect(column.id).toEqual(0);
    expect(column.title).toEqual('primary column');
    expect(column.primary).toEqual(true);
  });
});
