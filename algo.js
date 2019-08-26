function go() {
    let time = document.getElementById('val').value;
    time = parseInt(time, 10);
    //document.getElementById('root').innerHTML = time;
    //X is count for corresponding class
    let th = {
        bTime: 5,
        cost: 1500,
        org: 'T',
        C: 0,
        P: 0,
        X: 0
    };
    let pb = {
        bTime: 4,
        cost: 1000,
        org: 'P',
        C: 0,
        X: 0,
        T: 0
    };
    let cp = {
        bTime: 10,
        cost: 3000,
        org: 'C',
        X: 0,
        P: 0,
        T: 0
    };
    let arr = [th, pb, cp];
    for (est of arr) {
        max = 0;
        let fcost = 0;
        est['div'] = ~~(time / est.bTime);
        if (est.div < 1) {
            est['total'] = 0;
            continue;
        } else {
            for (i = 1; i < est.div; i++) fcost += i * est.bTime * est.cost;
        }
        est['rem'] = ~~(time % est.bTime);
        fcost += est.div * est.rem * est.cost;
        //checking for more than 1 type of building
        if (est.rem > 4) {
            if (est.rem === 5) {
                fcost += 1000;
                est.P++;
            } else {
                fcost += (est.rem - 5) * 1500;
                est.T++;
            }
        }
        est['total'] = fcost;
        est.X = est.div;
    }
    const maxValueOfcost = Math.max(...arr.map(o => o.total), 0);
    let filteredArr = arr.filter(item => item.total === maxValueOfcost);
    let txt = '';
    if (filteredArr[0].total === 0) {
        txt += `<p>Earnings:${filteredArr[0].total}</p>`;
    } else {
        txt += `<p>Earnings:${filteredArr[0].total}</p>`;
        for ({ bTime, cost, div, rem, X, org, total, ...val }
            of filteredArr) {
            let str = JSON.stringify(val);
            str = str.replace('{', '');
            str = str.replace('}', '');
            txt += `<p>${org}:${X} ${str}<p>`;
            console.log(val);
        }
        console.log(filteredArr);
    }
    console.log(filteredArr[0].total);
    document.getElementById('root').innerHTML = txt;
}