import path from "path"

const indexModule = (process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src")) |> require

/**
 * @type { import("../src") }
 */
const {default: flattenMultiline} = indexModule

it("should run", () => {
  expect(flattenMultiline("a")).toBe("a")
  expect(flattenMultiline("\na.\r\nb\n\n\n")).toBe("a. b")
})