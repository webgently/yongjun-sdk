import test from 'tape';
import sdk from '../src';

test('setup api configuration', async (t) => {
	t.plan(1)
	sdk.initApi("y-xsFp1BaD_FH-O8VyXG")
	const json = await sdk.getMovieList();
	const result = json.limit
	const expected = 1000
	t.equal(result, expected)
})
