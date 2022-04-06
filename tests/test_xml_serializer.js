import { assert } from "chai"

describe("XML Serializer", () => {
  it("We can initialize a new XMLSerializer instance", () => {
    const serializer = new XMLSerializer()
    assert.equal(
        serializer.serializeToString(window.document.body),
        '<body xmlns="http://www.w3.org/1999/xhtml"></body>'
    )
  })
})
