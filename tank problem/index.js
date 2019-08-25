function go() {
    let x = document.getElementById('val').value;
    let arr = x.split(',').map(item => {
        return parseInt(item, 10);
    });
    let filteredArr = arr.filter(x => x > 0);
    filteredArr.push(0);
    console.log(filteredArr);
    let table = '';
    let count = 0;
    let max = Math.max(...arr);
    for (let j = 0; j <= max; j++) {
        let idx = 0;
        table += '<tr>';
        for (let i = 0; i <= arr.length - 1; i++) {
            if (arr[i] === 0 && arr[i - 1] >= 0) {
                if (arr[i - 1] > 0) {
                    let F = arr[i - 1];
                    idx = filteredArr.indexOf(F, idx) + 1;
                    let L = filteredArr[idx];
                    console.log('F=' + F + 'L=' + L + 'at index' + idx);
                    color = Math.min(F, L);
                }
                //${j + '' + i + '{' + arr[i]}
                if (j - 1 >= max - color) {
                    count++;
                    table += ` 
                  <td bgcolor="#00FFFF"></td>`;
                } else
                    table += ` 
        <td bgcolor="white"></td>`;
            } else
                table += ` 
      <td bgcolor="white"></td>`;
        }
        table += '</tr>';
    }
    document.getElementById('t').innerHTML = table;
    document.getElementById('count').innerHTML = `${count} Units`;
}