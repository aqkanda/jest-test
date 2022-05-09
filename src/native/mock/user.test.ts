import axios from "axios";
import Users from "./user";

jest.mock("axios");

test("should fetch users", () => {
  const users = [{ name: "Bob" }];
  const resp = { data: users };
  const mockedAxios = axios as jest.Mocked<typeof axios>;
  mockedAxios.get.mockResolvedValue(resp);
  //dataとusersが同じかどうか
  return Users.all().then((data) => expect(data).toEqual(users));
});
