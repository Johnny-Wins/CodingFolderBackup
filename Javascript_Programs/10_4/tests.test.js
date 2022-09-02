it("should return only odd numbers from noOdds", () =>{
    expect(noOdds(3,4,5,6)).toEqual([4,6])
});

it("should return the smallest number in the list passed to findMin", () =>{
    expect(findMin(4,5,3,6)).toEqual(3)
});

it("should combine objects with mergeObjects", () => {
    expect(mergeObjects({falsity: true, truity: false},{falsiness: false, truthitude: true})).toEqual({falsity: true, truity: false, falsiness: false, truthitude: true})
});

it("should return a doubled array from doubleAndReturnArgs", () => {
    expect(doubleAndReturnArgs([2,4,6],8,10,12)).toEqual([4,8,12,16,20,24]);
});

describe("tests for removeRandom", () => {

    it("should return a list with a random item removed when you call removeRandom", () => {
        items = [2,3,6,34,222222]
        expect(removeRandom(items).length).toEqual(4);
    });

    it("should not affect the original list in any way", () => {
        items = [2,3,6,34,222222]
        expect(items.length).toEqual(5);
    });
})



it("should return a combined array from extend", () => {
    expect(extend([42,24,32],[3,3,3])).toEqual([42,24,32,3,3,3]);
});

it("should return an object with the added trait when addKeyVal is called", () => {
    expect(addKeyVal({hair: "brown", bear: "polar"},"scare","aaaaaaaaa")).toEqual({hair: "brown", bear: "polar", scare: "aaaaaaaaa"})
});

it("should return an object missing the specified trait when removeKey is called", () => {
    millinial = {hair: "blue", scare: "you"}

    expect(removeKey(millinial,"scare")).toEqual({hair: "blue"})
    expect(millinial.scare).toEqual("you");
});

it("should combine objects with combine", () => {
    expect(combine({falsity: true, truity: false},{falsiness: false, truthitude: true})).toEqual({falsity: true, truity: false, falsiness: false, truthitude: true})
});

it("should return an object with the added trait when update is called", () => {
    expect(update({hair: "brown", bear: "polar"},"scare","aaaaaaaaa")).toEqual({hair: "brown", bear: "polar", scare: "aaaaaaaaa"})
});