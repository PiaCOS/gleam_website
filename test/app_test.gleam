import app
import app/router
import app/web.{type Context, Context}
import gleeunit
import gleeunit/should
import wisp/testing

pub fn main() {
  gleeunit.main()
}

fn with_context(testcase: fn(Context) -> t) -> t {
  let context = Context(static_directory: app.static_directory())
  testcase(context)
}

pub fn get_home_page_test() {
  use ctx <- with_context
  let request = testing.get("/", [])
  let response = router.handle_request(request, ctx)

  response.status
  |> should.equal(200)

  response.headers
  |> should.equal([#("content-type", "text/html; charset=utf-8")])
}
