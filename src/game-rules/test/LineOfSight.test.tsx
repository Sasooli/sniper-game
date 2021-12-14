import LineOfSight from "../LineOfSight";

describe('interveningSquares', () => {
    test('returns empty array if start and end squares are equal', () => {
        const squares = LineOfSight.interveningSquares(2,4,2,4)

        expect(squares).toHaveLength(0);
    });

    test('returns correct squares in single row', () => {
        const squares = LineOfSight.interveningSquares(2,4,6,4)

        expect(squares).toEqual([[3,4], [4,4], [5,4]]);
    });

    test('returns correct squares in single column', () => {
        const squares = LineOfSight.interveningSquares(0,1,0,6)

        expect(squares).toEqual([[0,2], [0,3], [0,4], [0,5]]);
    });

    test('returns correct squares for slope 2/5', () => {
        const squares = LineOfSight.interveningSquares(0,0,5,2)

        expect(squares).toEqual([[1,0], [1,1], [2,1], [3,1], [4,1], [4,2]]);
    });

    test('returns correct squares for slope 5/2', () => {
        const squares = LineOfSight.interveningSquares(0,0,2,5)

        expect(squares).toEqual([[0,1], [1,1], [1,2], [1,3], [1,4], [2,4]]);
    });

    test('returns correct squares for slope 3/6', () => {
        const squares = LineOfSight.interveningSquares(5,2,11,5)

        expect(squares).toEqual([[6,2], [6,3], [7,3], [8,3], [8,4], [9,4], [10,4], [10,5]]);
    });

    test('returns correct squares and pairs for slope 1/1', () => {
        const squares = LineOfSight.interveningSquares(5,2,6,3)

        expect(squares).toHaveLength(1);
        expect(squares[0]).toHaveLength(2);
        expect(squares[0]).toContain([5,3]);
        expect(squares[0]).toContain([6,2]);
    });

    test('returns correct squares and pairs for slope 3/3', () => {
        const squares = LineOfSight.interveningSquares(5,2,8,5)

        expect(squares).toHaveLength(5);
        expect(squares[0]).toHaveLength(2);
        expect(squares[0]).toContain([5,3]);
        expect(squares[0]).toContain([6,2]);
        expect(squares[1]).toEqual([6,3]);
        expect(squares[2]).toHaveLength(2);
        expect(squares[2]).toContain([6,4]);
        expect(squares[2]).toContain([7,3]);
        expect(squares[3]).toEqual([7,4]);
        expect(squares[4]).toHaveLength(2);
        expect(squares[4]).toContain([7,5]);
        expect(squares[4]).toContain([8,4]);
    });

    test('returns correct squares and pairs for slope 1/5', () => {
        const squares = LineOfSight.interveningSquares(2,2,7,3)

        expect(squares).toHaveLength(5);
        expect(squares[0]).toEqual([3,2]);
        expect(squares[1]).toEqual([4,2]);
        expect(squares[2]).toHaveLength(2);
        expect(squares[2]).toContain([4,3]);
        expect(squares[2]).toContain([5,2]);
        expect(squares[3]).toEqual([5,3]);
        expect(squares[3]).toEqual([6,3]);
    });

    test.todo('returns correct squares for decreasing x', () => {
    });

    test.todo('returns correct squares for decreasing y', () => {
    });

    test.todo('returns correct squares for decreasing x and y', () => {
    });

})

