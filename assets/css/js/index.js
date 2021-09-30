
/* Half Pyramid

*
**
***
****
*****

*/

let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

/*
 
    *
   **
  ***
 ****
*****

*/

let b = 5;
let stng = "";
for (let i = 1; i <= b; i++) {
  // printing spaces
  for (let j = 0; j < b - i; j++) {
    stng += " ";
  }
  // printing star
  for (let k = 0; k < i; k++) {
    stng += "*";
  }
  stng += "\n";
}
console.log(stng);


/*
 Inverted Half Pyramid

*****
****
***
**
*

*/



let a = 5;
let str = "";
for (let i = 0; i < a; i++) {
  // printing star
  for (let k = 0; k < n - i; k++) {
    str += "*";
  }
  str += "\n";
}
console.log(str);

//full pyramid

let c = 5;
let stg = "";
// External loop
for (let i = 1; i <= c; i++) {
  // printing spaces
  for (let j = 1; j <= c - i; j++) {
    stg += " ";
  }
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) {
    stg += "*";
  }
  stg += "\n";
}
console.log(stg);


//inverted full pyramid

let d = 5;
let s = "";
// External loop
for (let i = 0; i < d; i++) {
  // printing spaces
  for (let j = 0; j < i; j++) {
    s += " ";
  }
  // printing star
  for (let k = 0; k < 2 * (d-i) - 1; k++) {
    s += "*";
  }
  s += "\n";
}
console.log(s);



/*

*
**
***
****
*****
****
***
**
*

*/


let x = 5;
let y = "";
for (let i = 1; i <= x; i++) {
  for (let j = 0; j < i; j++) {
    y += "*";
  }
  y += "\n";
}
console.log(y);


let o = 4;
let v = "";
for (let i = 0; i < o; i++) {
  // printing star
  for (let k = 0; k < o - i; k++) {
    v += "*";
  }
  v += "\n";
}
console.log(v);


/*

    *
   ***
  *****
 *******
*********
*******
 *****
  ***
   *

*/

let m = 5;
let f = "";
// External loop
for (let i = 1; i <= m; i++) {
  // printing spaces
  for (let j = 1; j <= m - i; j++) {
    f += " ";
  }
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) {
    f += "*";
  }
  f += "\n";
}
console.log(f);


let p = 4;
let w = "";
// External loop
for (let i = 0; i < p; i++) {
  // printing spaces
  for (let j = 0; j < i; j++) {
    w += " ";
  }
  // printing star
  for (let k = 0; k < 2 * (p-i) - 1; k++) {
    w += "*";
  }
  w += "\n";
}
console.log(w);


/*

1
1 2
1 2 3
1 2 3 4
1 2 3 4 5

*/
let h = 5;
let l = "";

for (let i = 1; i <= h; i++) {
  
  for (let j = 1; j <= i; j++) {
    l += j;
  }
  l += "\n";
}
console.log(l);


/*
12345
1234
123
12
1
*/

let g = 5; 
let q = "";
// External loop
for (let i = 1; i <= g; i++) {
  for (let j = 1; j <= g - i + 1; j++) {
    q += j;
  }
  q += "\n";
}
console.log(q);




