declare global {
  const test: any;
  const expect: any;
}
import { MailSlurp } from "./index"
import Default from "./index"

test("that import was successful", () => {
  expect(MailSlurp).not.toBeNull();
  expect(Default).not.toBeNull();
});
