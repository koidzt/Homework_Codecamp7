// ข้อ 1
// let message = '';
// let n = +prompt('Please enter number for n','');
// for(let i = 0; i < n ; i++) message = message + '*';
// alert(message);

// ข้อ 2
// let message='';
// let n = +prompt('Please enter number for n','');
// for(let i = 0; i < n ; i++) {
//     message = message + '\n';
//     for(let j = 0; j < n ; j++) message = message + '*';
// }
// alert(message);

// ข้อ 3
// let message='';
// let n = +prompt('Please enter number for n','');
// for(let i = 0; i < n ; i++) {
//     message = message + '\n';
//     for(let j = 1; j <= n ; j++) message = message + j;
// }
// alert(message);

// ข้อ 4
// let message='';
// let n = +prompt('Please enter number for n','');
// for(let i = 1; i <= n ; i++) {
//     for(let j = 1; j <= n ; j++) message = message + `${i}`;
//     message = message + '\n';
// }
// alert(message);

// ข้อ 5
// let message='';
// let n = +prompt('Please enter number for n','');
// for(let i = n; i >= 1 ; i--) {
//     for(let j = 1; j <= n ; j++) message = message + `${i}`;
//     message = message + '\n';
// }
// alert(message);

// ข้อ 6
// let message='';
// let n = +prompt('Please enter number for n','');
// let c = 1;
// for(let i = 1; i <= n; i++) {
//     for(let j = 1 ; j <= n; j++) {
//         message = message + `${c}`;
//         c++;
//     }
//     message = message + '\n';
// }
// alert(message);

// ข้อ 7
// let message='';
// let n = +prompt('Please enter number for n','');
// let c = n*n;
// for(let i = n; i >= 1; i--) {
//     for(let j = n ; j >= 1; j--) {
//         message = message + `${c}`;
//         c--;
//     }
//     message = message + '\n';
// }
// alert(message);

// ข้อ 8
// let message='';
// let n = +prompt('Please enter number for n','');
// for(let i = 0; i < n; i++)
// {   message = message + `${i*2}` + `\n`;
// }
// alert(message);

// ข้อ 9
// let message='';
// let n = +prompt('Please enter number for n','');
// for(let i = 1; i <= n; i++)
// {   message = message + `${i*2}` + `\n`;
// }
// alert(message);

// ข้อ 10
// let message='';
// let n = +prompt('Please enter number for n','');
// for(let i = 1; i <= n; i++)
// {   for(let j = 1; j <= n; j++)
//     {    message = message + `${i*j}`;
//     }
//     message = message + `\n`;
// }
// alert(message);

// ข้อ 11
// let message='';
// let n = +prompt('Please enter number for n','');
// for(let i = 1; i <= n; i++)
// {   for(let j = 1; j <= n; j++)
//     {   if(i === j)
//         {   message = message + `-`;
//         } 
//         else 
//         {   message = message + `*`;
//         }
//     }
//     message = message + `\n`;
// }
// alert(message);

// ข้อ 12
// let message='';
// let n = +prompt('Please enter number for n','');
// for(let i = n; i >= 1; i--)
// {   for(let j = 1; j <= n; j++)
//     {   if(i === j)
//         {   message = message + `-`;
//         } 
//         else 
//         {   message = message + `*`;
//         }
//     }
//     message = message + `\n`;
// }
// alert(message);

// ข้อ 13
// let message='';
// let n = +prompt('Please enter number for n','');
// for(let i = 1; i <= n; i++)
// {   for(let j = 1; j <= n; j++)
//     {   if(j > i)
//         {   message = message + `-`;
//         } 
//         else 
//         {   message = message + `*`;
//         }
//     }
//     message = message + `\n`;
// }
// alert(message);

// ข้อ 14
// let message='';
// let n = +prompt('Please enter number for n','');
// for(let i = n; i >= 1; i--)
// {   for(let j = 1; j <= n; j++)
//     {   if(j > i)
//         {   message = message + `-`;
//         } 
//         else 
//         {   message = message + `*`;
//         }
//     }
//     message = message + `\n`;
// }
// alert(message);

// ข้อ 15
// let message='';
// let n = +prompt('Please enter number for n','');
// let i;
// for(i = 1; i <= n; i++)
// {   for(let j = 1; j <= n; j++)
//     {   if(j > i)
//         {   message = message + `-`;
//         } 
//         else 
//         {   message = message + `*`;
//         }
//     }
//     message = message + `\n`;
// }
// for(i = i-2; i >= 1; i--)
// {   for(let j = 1; j <= n; j++)
//     {   if(j > i)
//         {   message = message + `-`;
//         } 
//         else 
//         {   message = message + `*`;
//         }
//     }
//     message = message + `\n`;
// }
// alert(message);

// ข้อ 16
// let message='';
// let n = +prompt('Please enter number for n','');
// let i;
// for(i = 1; i <= n; i++)
// {   for(let j = 1; j <= n; j++)
//     {   if(j > i)
//         {   message = message + `-`;
//         } 
//         else 
//         {   message = message + `${i}`;
//         }
//     }
//     message = message + `\n`;
// }
// for(i = i-2; i >= 1; i--)
// {   for(let j = 1; j <= n; j++)
//     {   if(j > i)
//         {   message = message + `-`;
//         } 
//         else 
//         {   message = message + `${i}`;
//         }
//     }
//     message = message + `\n`;
// }
// alert(message);

// ข้อ 17
// let message='';
// let n = +prompt('Please enter number for n','');
// for(let i = 1; i <= n; i++)
// {   for(let j = 1; j <= n; j++)
//     {   if(j+i <= n)
//         {   message = message + `-`;
//         } 
//         else 
//         {   message = message + `*`;
//         }
//     }
//     message = message + `\n`;
// }
// alert(message);

// ข้อ 18
// let message='';
// let n = +prompt('Please enter number for n','');
// for(let i = 1; i <= n; i++)
// {   for(let j = 1; j <= n; j++)
//     {   if(j < i)
//         {   message = message + `-`;
//         } 
//         else 
//         {   message = message + `*`;
//         }
//     }
//     message = message + `\n`;
// }
// alert(message);

// ข้อ 19
// let message='';
// let n = +prompt('Please enter number for n','');
// for(let i = 1; i <= n; i++)
// {   for(let j = 1; j <= n; j++)
//     {   if(j+i <= n)
//         {   message = message + `-`;
//         } 
//         else 
//         {   message = message + `*`;
//         }
//     }
//     message = message + `\n`;
// }
// for(let i = 2; i <= n; i++)
// {   for(let j = 1; j <= n; j++)
//     {   if(j < i)
//         {   message = message + `-`;
//         } 
//         else 
//         {   message = message + `*`;
//         }
//     }
//     message = message + `\n`;
// }
// alert(message);

// ข้อ 20
// let message='';
// let n = +prompt('Please enter number for n','');
// let c = 1;
// for(let i = 1; i <= n; i++)
// {   for(let j = 1; j <= n; j++)
//     {   if(j+i <= n)
//         {   message = message + `-`;
//         } 
//         else 
//         {   message = message + `${c}`;
//             c++;
//         }
//     }
//     message = message + `\n`;
// }
// for(let i = 2; i <= n; i++)
// {   for(let j = 1; j <= n; j++)
//     {   if(j < i)
//         {   message = message + `-`;
//         } 
//         else 
//         {   message = message + `${c}`;
//             c++;
//         }
//     }
//     message = message + `\n`;
// }
// alert(message);

// ข้อ 21
// let message = '';
// let n = +prompt('Please enter number for n','');
// for(let i = 1; i<=n; i++)
// {   for(let j = 1; j<=n; j++)
//     {   if(j + i <= n)
//         {   message = message + `-`;
//         }
//         else
//         {   message = message + `*`;
//         }
//     }
//     for(let j = 2; j<=n; j++)
//     {   if(j > i)
//         {   message = message + `-`;
//         }
//         else
//         {   message = message + `*`;
//         }
//     }
//     message = message + `\n`;
// }
// alert(message);

// ข้อ 22
// let message='';
// let n = +prompt('Please enter number for n','');
// for(let i = 1; i <= n; i++)
// {   for(let j = 1; j < n; j++)
//     {   if(j < i)
//         {   message = message + `-`;
//         } 
//         else 
//         {   message = message + `*`;
//         }
//     }
//     for(let j = n; j >= 1; j--)
//         {   if(j < i)
//             {   message = message + `-`;
//             } 
//             else 
//             {   message = message + `*`;
//             }
//         }
//     message = message + `\n`;
// }
// alert(message);

// ข้อ 23
// let message = '';
// let n = +prompt('Please enter number for n','');
// for(let i = 1; i<=n; i++)
// {   for(let j = 1; j<=n; j++)
//     {   if(j + i <= n)
//         {   message = message + `-`;
//         }
//         else
//         {   message = message + `*`;
//         }
//     }
//     for(let j = 2; j<=n; j++)
//     {   if(j > i)
//         {   message = message + `-`;
//         }
//         else
//         {   message = message + `*`;
//         }
//     }
//     message = message + `\n`;
// }
// for(let i = 2; i <= n; i++)
// {   for(let j = 1; j < n; j++)
//     {   if(j < i)
//         {   message = message + `-`;
//         } 
//         else 
//         {   message = message + `*`;
//         }
//     }
//     for(let j = n; j >= 1; j--)
//         {   if(j < i)
//             {   message = message + `-`;
//             } 
//             else 
//             {   message = message + `*`;
//             }
//         }
//     message = message + `\n`;
// }
// alert(message);

// ข้อ 24
let message = '';
let n = +prompt('Please enter number for n','');
let c = 1;
for(let i = 1; i<=n; i++)
{   for(let j = 1; j<=n; j++)
    {   if(j + i <= n)
        {   message = message + `-`;
        }
        else
        {   message = message + `${c}`;
            c++;
        }
    }
    for(let j = 2; j<=n; j++)
    {   if(j > i)
        {   message = message + `-`;
        }
        else
        {   message = message + `${c}`;
            c++;
        }
    }
    message = message + `\n`;
}
for(let i = 2; i <= n; i++)
{   for(let j = 1; j < n; j++)
    {   if(j < i)
        {   message = message + `-`;
        } 
        else 
        {   message = message + `${c}`;
            c++;
        }
    }
    for(let j = n; j >= 1; j--)
        {   if(j < i)
            {   message = message + `-`;
            } 
            else 
            {   message = message + `${c}`;
                c++;
            }
        }
    message = message + `\n`;
}
alert(message);