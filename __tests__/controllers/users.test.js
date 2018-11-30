describe('users controller', () => {
  it('should get all books', () => {
    const Users = {
      findAll: jest.fn()
    };

    const expectedResponse = [{
      id: '1',
      username: 'Testing User',
      created_at: '2016-08-06T23:55:36.692Z',
      updated_at: '2016-08-06T23:55:36.692Z'
    }];

    Users.findAll.mockResolvedValue(expectedResponse);

    return usersController(Users).getAll()
      .then(response => expect(response.data).toEqual(expectedResponse));
  });
});
