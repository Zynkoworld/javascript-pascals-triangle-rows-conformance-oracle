const rows = (size) => {
  if (size === 0) {
    return [];
  } else if (size === 1) {
    return [[1]];
  }

  let triangleRows = [[1]];

  const getNextRow = (row) => {
    let nextRow = [];
    nextRow.push(1);
    for (let i = 0; i <= row.length - 2; i++) {
      nextRow.push(row[i] + row[i + 1]);
    }
    nextRow.push(1);
    return nextRow;
  };

  while (size-- > 1) {
    triangleRows.push(getNextRow(triangleRows[triangleRows.length - 1]));
  }

  return triangleRows;
};

const __in = [0, 1, 2, 3, 4, 5, 6, 10];
const __out = [];
for (const x of __in) {
  try { __out.push({ok: true, v: rows(x)}); }
  catch (e) { __out.push({ok: false, e: String(e).slice(0, 40)}); }
}
console.log(JSON.stringify({out: __out}));
