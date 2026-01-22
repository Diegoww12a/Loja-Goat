// const { list } = require("postcss");

// import { FunnelIcon } from "lucide-react";


lucide.createIcons();

// AOS.init();


let carrinho = []

const produtos = [
 
  { id: 348012, nome: "G36C Battle", preco: 850, categoria: "pt", imagens: ["https://storage.hydrus.gg/production/packages/7CkbMGcO4dIaRc0v1pphFdwveBzgRQTR45rLoWkJUSNKlYGRDPKCfKLnnNHLtie8.png"] },
  { id: 446307, nome: "M4A1 White Fire", preco: 400, categoria: "pt", imagens: ["https://storage.hydrus.gg/production/packages/c41lCODQ1dXiE68AYE8IDKdlSc3OrZlbzS9vwcut6DJ0HslHv8cf7URqfKdUfLvZ.png"] },
  { id: 404067, nome: "M4A1 Gel", preco: 400, categoria: "pt", imagens: ["https://storage.hydrus.gg/production/packages/aM8YWDeYZWn5TxGdPVRmr1BoHl6R3VzOls22ozk7xL2NSbociC8GEnw7ObMrncfc.png"] },
  { id: 433850, nome: "M4A1 Ártico", preco: 159, categoria: "pt", imagens: ["https://storage.hydrus.gg/production/packages/8RiOADC2xrDK3cQePrBuI6Zuu2VCYYTxMDEvmPTaeV4GpDqQCoaYg1tiBwrP3Wg4.png"] },
  { id: 384426, nome: "M4A1 Japonesa", preco: 499, categoria: "pt", imagens: ["https://storage.hydrus.gg/production/packages/sk1FrdcnOMPl1Zm5v6IpalxuBrGvIZM5o5Wl74UDZLhpAaLX6cdOCAZIIieDkzUB.png"] },
  { id: 431043, nome: "M4A1 Xoxo", preco: 149, categoria: "pt", imagens: ["https://storage.hydrus.gg/production/packages/EhabWe82yZOumQp9zq21SXkM3LLRKCO0PRuaiw5AR5gTyX1ugrFqbMwn8oY6Ibcb.png"] },
  { id: 232801, nome: "M4A1 Nevada", preco: 199, categoria: "pt", imagens: ["https://storage.hydrus.gg/production/packages/AjYhTAtHzqF0V5qA7tSkdVP66kOA5SLcMV1wkOuOnEAHrP92G7jQ6rBfEunLIZHt.png"] },
  { id: 360262, nome: "M4A1 Shuriken", preco: 199, categoria: "pt", imagens: ["https://storage.hydrus.gg/production/packages/3UA7eUa1Rbd0mC5Wl1Nsl6usVPjQI54v2OTonLUaRKJc7dKcWaeBCU5qSVdLlywd.png"] },
  { id: 412599, nome: "M4A1 Fantasia", preco: 159, categoria: "pt", imagens: ["https://storage.hydrus.gg/production/packages/y9w9uEE95RsgRIZQnfGEfUg6EcegPWNR6bDQcGmVs7B5sJx13t60qx4VvSwfuGeP.png"] },
  { id: 381964, nome: "M4A1 Militar", preco: 79, categoria: "pt", imagens: ["https://storage.hydrus.gg/production/packages/IkD1Q0XrhljEGWNsH7Gh15qMLvr2fekb00CIErSS6N0pm0nOte0mqm3RPDk04wrN.png"] },
  { id: 252394, nome: "M4A1 Radiação", preco: 79, categoria: "pt", imagens: ["https://storage.hydrus.gg/production/packages/YL7h1UCd08xTvj6fzfvkMpyMsj81yc72rKTIukwfSKHC3RKQbnKc25jCTnGWveNy.png"] },
  { id: 328949, nome: "M4A1 Americana", preco: 79, categoria: "pt", imagens: ["https://storage.hydrus.gg/production/packages/5QgT6cApKhQRrNDLTVuQ8iUo83nFrfwAbxXvzAMEdeGWipnnWy2nkEbsagBySoHa.png"] },
  { id: 233785, nome: "M4A1 Blue", preco: 49, categoria: "pt", imagens: ["https://storage.hydrus.gg/production/packages/LAxpR6koIlSe8Inukiso2CPmCCSSRjCpKXUgLq1xYR8EcNqFjcEdtwnQk3zd915n.png"] },
  { id: 439374, nome: "G36C Masters", preco: 20000, categoria: "pt", imagens: ["https://storage.hydrus.gg/production/packages/gtuzWgVCsuMldVEGtKLkMMXfmf1ewyptemymfZ20boQNvNQO4RxWprs02yMqlFQc.png"] },
  { id: 452932, nome: "G36C Overcharge", preco: 380, categoria: "pt", imagens: ["https://storage.hydrus.gg/production/packages/OVPQ9jHyhqNPMnr5gcGm5FwYsM71bnGMMyCgI8eO0KG21lenGMh000eRiN7L1b5i.png"] },
  { id: 425949, nome: "G36C Oni", preco: 600, categoria: "pt", imagens: ["https://storage.hydrus.gg/production/packages/J5hNl5ziqJlD4Ur3esvROiC5cCYxbv604zuhzQ6cRB6JkkOXfK4VoKxIHXRYgNoj.png"] },
  { id: 404014, nome: "G36C-Lança Água", preco: 550, categoria: "pt", imagens: ["https://storage.hydrus.gg/production/packages/ox1r5W0ceh6Q57DfeH2XIi3Zx8T74AP2LrMcBp2Fq6Q715C5uhgpi1hFqbgYRfed.png"] },
  { id: 388705, nome: "G36C Pisca-Pisca", preco: 230, categoria: "pt", imagens: ["https://storage.hydrus.gg/production/packages/vipVsC4yZZEwb3H7diizFbJ0nfAuDwsL0lJVnS1OKHdfqDDis4Ga5L6Xtea1F5P9.png"] },
  { id: 423233, nome: "G36C Cenoura", preco: 149, categoria: "pt", imagens: ["https://storage.hydrus.gg/production/packages/Vq0H5cdKcbMFDkrRi2MZLVNaZZdCxSl85WCOy4z1JNKA9Ozc50V3y1sVH8BH0Gdb.png"] },
  { id: 232806, nome: "G36C Ho Ho Ho", preco: 230, categoria: "pt", imagens: ["https://storage.hydrus.gg/production/packages/MJ1RPAZ66TaxP4OVuOP86kFGSh9WrmlZdEbfTmfP3Od6RpOEji2kiC14qePU9pbR.png"] },
{ id: 384493, nome: "G36C Esqueleto", preco: 350, categoria: "pt", imagens: ["https://storage.hydrus.gg/production/packages/1q0iEMOt5jicmLS0WzC3ui3YlCdNEpT9861LssBCIvLAxPPgYYbUKV0Pqiv3gbuk.png"] },
{ id: 339155, nome: "G36 Yin Yang", preco: 199, categoria: "pt", imagens: ["https://storage.hydrus.gg/production/packages/EO5Rhl2iz24YltV8Lhz1WSghmosWq01IAnOEiUSl5DgJQbfpJwA3VJR3X8BTh5oo.png"] },
{ id: 295360, nome: "G36C Ventania", preco: 159, categoria: "pt", imagens: ["https://storage.hydrus.gg/production/packages/AMdWB7wlOlVuORs9ZnkhjXQhpyfLBgADOd29YcbZA5m1DRLsgQeIYC6JhkwXceoD.png"] },
{ id: 239554, nome: "G36C Arco-Íris", preco: 159, categoria: "pt", imagens: ["https://storage.hydrus.gg/production/packages/aTum3SoBNqGZHXJAiFpdFTcfFg0DB2XL6TahNE1NYSVd5c9tMWmVFXkP6Y5Uwxcl.png"] },
{ id: 387492, nome: "G36C Caveira", preco: 159, categoria: "pt", imagens: ["https://storage.hydrus.gg/production/packages/OYSfSWjPvk6ZdjJBHhon4m0CEX2VeaJU6GHiu8gv9W8LFC0PKFeQRDO9bIfJv2Wz.png"] },
{ id: 444789, nome: "G36C Papelão", preco: 99, categoria: "pt", imagens: ["https://storage.hydrus.gg/production/packages/52xCwmj8384vrui5ktLX4yb8Sy1tACSkGcYjJajnYtlULlj39PzXun9uHJO7CklX.png"] },
{ id: 298387, nome: "G36C Energizada", preco: 99, categoria: "pt", imagens: ["https://storage.hydrus.gg/production/packages/cDtd9UJu10UJU0Frv9sdJ4aMQjgfxT2f7rW9dWJqvM9NsrG3TDHbwKQLAcoKIbPE.png"] },
{ id: 232816, nome: "G36-C Blue", preco: 79, categoria: "pt", imagens: ["https://storage.hydrus.gg/production/packages/1nt0RYBI3hwRaTjAEfa15BWSA2YMTUDmNLZVqqBulxGK0O672WtHIP6NR3F4jx7q.png"] },
{ id: 435696, nome: "AK-103 Cupido", preco: 199, categoria: "pt", imagens: ["https://storage.hydrus.gg/production/packages/xQFbDquCSbakURw1YGeCGWHgWcAuCYzwwlp0wujocX0n77EOs7lNQpcBXBCMgIkG.png"] },
{ id: 412396, nome: "Ak-103 Presas Sanguinária", preco: 149, categoria: "pt", imagens: ["https://storage.hydrus.gg/production/packages/2rwNvw3ZkkUhOvIetO7rpVxpiVdKFkQ6k0FhQzNFi2RlbPBgCXBOVI1DAyfmCooU.png"] },
{ id: 456603, nome: "Ak-103 Overcharge", preco: 149, categoria: "pt", imagens: ["https://storage.hydrus.gg/production/packages/JoANjQyAbZCU7s5j5BfZdCAuUBLi8y46PAQgm4sGzYKxrIh8EusvnZr10yyTnB0R.png"] },
{ id: 336854, nome: "AK-103 Futurista", preco: 119, categoria: "pt", imagens: ["https://storage.hydrus.gg/production/packages/lraA38yhBs2C0gcd1xfPc7xKV8NNQmz47OUH0cur3Q2X2J6tioLBr99O1I6ZCLFB.png"] },
{ id: 232828, nome: "AKaveira", preco: 149, categoria: "pt", imagens: ["https://storage.hydrus.gg/production/packages/KlSkLRw9zO3GAenqFNm8qcgsEnEd10b1VnWAn8EVnco6nOImQJZGui4fN8IoPqSC.png"] },
{ id: 318859, nome: "AK-103 Kitsune", preco: 59, categoria: "pt", imagens: ["https://storage.hydrus.gg/production/packages/9qkOy3N07xhhFPl5tZtoGbGOghfzsgMHYbcn6Uj1vwIlwHkF1ejzJV6l8Qm8mYAi.png"] },
{ id: 232700, nome: "AK-Revelação", preco: 79, categoria: "pt", imagens: ["https://storage.hydrus.gg/production/packages/e4GBRiBBEniRaefQQ5sjesNg7YmEw0FbbqbmgbQj26cM02Y3Bod4ZRtCH3T0CyTG.png"] },
{ id: 295354, nome: "AK-103 Flamejante", preco: 70, categoria: "pt", imagens: ["https://storage.hydrus.gg/production/packages/2gaA8UOeZC1q9RXD2Dri0uGRPmFeZGxh1eVBp1z6uWBwdkXv1inb1iNqsPPNTZVw.png"] },
{ id: 401629, nome: "Mtar-21 Lança Água", preco: 149, categoria: "pt", imagens: ["https://storage.hydrus.gg/production/packages/PWEnutn9BFjVu4TFQhrBVo2F6yM3GKU5Mo2xB3Akyn5PY8jQL9oaJERLwIhB3BwM.png"] },
{ id: 435587, nome: "Mtar-21 Cupido", preco: 99, categoria: "pt", imagens: ["https://storage.hydrus.gg/production/packages/S02hZbG3SKSyvuDA7vwxHhJDaHUoqQRu2OumoJWe6tlDx1GbmWMMyr7Ps3tcSnd1.png"] },
{ id: 440922, nome: "MTAR-21 Papelão", preco: 39, categoria: "pt", imagens: ["https://storage.hydrus.gg/production/packages/jF9DwrYGi0mzpxSMxTfhpwyBE2CecauHEDIJWzLGxvVWfC9ZzRVqJ1yP4ZpJHTXy.png"] },
{ id: 426272, nome: "MTAR-21 ONI", preco: 49, categoria: "pt", imagens: ["https://storage.hydrus.gg/production/packages/OILmOttutXOdzKKnFGbBlHFnhgmDxESsdw2FRjae8um3CCaeRSpTDuZspb1fehEL.png"] },
{ id: 360264, nome: "MTAR-21 Shuriken", preco: 45, categoria: "pt", imagens: ["https://storage.hydrus.gg/production/packages/CMNhAuc72vDmYuPkBt5hRq5yJUvhX02s1HWREn1FTM5TFY7ot2SVaGEIyzyFTdtU.png"] },
{ id: 411772, nome: "Mtar-21 fantasia", preco: 39, categoria: "pt", imagens: ["https://storage.hydrus.gg/production/packages/wrG8fQluLRtI9kDwQmFtxBRvnQVfAvypyA97mKfWMYnQRA4dDWFb8plRkRyE2L2F.png"] },
{ id: 387433, nome: "MTAR-21 Assombrada", preco: 34, categoria: "pt", imagens: ["https://storage.hydrus.gg/production/packages/eFwd4p5NT4w2c0G3DguC4lgE2svx6IIVuaOvp9TuDVDarjQTmW5wuPybZvd1qAt4.png"] },
{ id: 336862, nome: "MTAR-21 Lazer", preco: 40, categoria: "pt", imagens: ["https://storage.hydrus.gg/production/packages/bH3zDrzK6kMaV7xGMmZj2BIZaZ0LLo9DCCx28jxl9jOOLTWpkncYBRUUGdJzTjMO.png"] },
{ id: 318863, nome: "MTAR-21 Sakura", preco: 29, categoria: "pt", imagens: ["https://storage.hydrus.gg/production/packages/PUTOXQPB3WyBlqxQy0Xj5GCNbLhKl0FNdPM7oiiZjZxk3eTPV11BQ0QtSW0XHtfz.png"] },
{ id: 252399, nome: "MTAR-21 Radiação", preco: 25, categoria: "pt", imagens: ["https://storage.hydrus.gg/production/packages/PAdsxBmip5vb8MAf79sHae3shoxEZVLuiiS5fn1xI1o5F8gvrtwGg1vaVtxES2O5.png"] },
{ id: 233788, nome: "MTAR-21 Blue", preco: 24, categoria: "pt", imagens: ["https://storage.hydrus.gg/production/packages/S1SaOARV6jQskN1wAl0ZS6K6g7Xo7iGkfgSvwtZTK277pdk9OOgPcPo9DSgV3gzA.png"] },
{ id: 388708, nome: "MTAR-21 Congelada", preco: 70, categoria: "pt", imagens: ["https://storage.hydrus.gg/production/packages/PyRRqmVu7Ncg6V3i0eEO5SO41pvrueARXNZMFRAkLyuDBh0axTUj2ivTavfJgtlc.png"] },
{ id: 348013, nome: "Micro Uzi Battle", preco: 99, categoria: "pt", imagens: ["https://storage.hydrus.gg/production/packages/rCUDMiPfFvcwaZGKXpAQHQvKEOb1jqyRFW2oZiD1T6MhaELJP1L7uavySWdJfOTu.png"] },
{ id: 426455, nome: "Micro Uzi Oni", preco: 70, categoria: "pt", imagens: ["https://storage.hydrus.gg/production/packages/ly9vT3sohibXVakZcdQ5dOzwZMpyIjw5rZosWVZxMXK3kP9UlOuIxYOD8WYrpcKy.png"] },
{ id: 463939, nome: "Micro Uzi Overcharge", preco: 59, categoria: "pt", imagens: ["https://storage.hydrus.gg/production/packages/iqHg0bdkkCawNUwSVsrXaTg28gLOBf3t7kIuwVq7tI5fzwtar6wSilOLp55R7Esi.png"] },
{ id: 404440, nome: "Micro Uzi Gel", preco: 70, categoria: "pt", imagens: ["https://storage.hydrus.gg/production/packages/yVSW4p79uUaqJ1uQCwJurMT5DEMYCpLOkfXaj6wmioE9HSIAAKoRbeSECK6YFZf2.png"] },
{ id: 442122, nome: "Micro Uzi Ártico", preco: 39, categoria: "pt", imagens: ["https://storage.hydrus.gg/production/packages/k2NYni4e01MC3wmHrZlFeqGOZj9fDq9Zny9pmFsoA7kGTq3YCUPcjDQgxP1AgEHm.png"] },
{ id: 419141, nome: "Micro Uzi Presas", preco: 79, categoria: "pt", imagens: ["https://storage.hydrus.gg/production/packages/qHbL9IYSXOGiWAZBhnju12F1InDLztzs2As9fi7zUZcUEqmpYlm1yAhZrcufd2UA.png"] },
{ id: 232704, nome: "Micro Uzi Fogo Azul", preco: 29, categoria: "pt", imagens: ["https://storage.hydrus.gg/production/packages/ZyPskHeZyjIU9gDWesuooEaruSMd3iuKrJAfVyiXp75JmtceEMmjzLnE3ubgJYVx.png"] },








 // CAR


  { id:23, nome:"Camisa Tática Preta", preco:95, categoria:"car", imagens:["imagens/camisa.png"] },
  { id:24, nome:"Camisa Urban Cinza", preco:110, categoria:"car", imagens:["imagens/camisa1.png"] },
  { id:25, nome:"Camisa Militar Verde", preco:130, categoria:"car", imagens:["imagens/camisa2.png"] },
  { id:26, nome:"Camisa Night Ops", preco:150, categoria:"car", imagens:["imagens/camisa3.png"] },
  { id:27, nome:"Camisa Night Ops", preco:150, categoria:"car", imagens:["imagens/camisa4.png"] },
  { id:28, nome:"Camisa Night Ops", preco:150, categoria:"car", imagens:["imagens/camisa5.png"] },
  { id:29, nome:"Camisa Night Ops", preco:150, categoria:"car", imagens:["imagens/camisa6.png"] },
  { id:30, nome:"Camisa Night Ops", preco:150, categoria:"car", imagens:["imagens/camisa7.png"] },
  { id:31, nome:"Camisa Night Ops", preco:150, categoria:"car", imagens:["imagens/camisa8.png"] },

  

 
  // COLETE
  { id:32, nome:"Colete Nível I", preco:500, categoria:"colete", imagens:["imagens/colete.png"] },
  { id:33, nome:"Colete Nível II", preco:850, categoria:"colete", imagens:["imagens/colete1.png"] },
  { id:34, nome:"Colete Nível III", preco:1200, categoria:"colete", imagens:["imagens/colete2.png"] },
  { id:35, nome:"Colete Blindado Pro", preco:1800, categoria:"colete", imagens:["imagens/colete3.png"] },
  { id:36, nome:"Colete Blindado Pro", preco:1800, categoria:"colete", imagens:["imagens/colete4.png"] },
  { id:37, nome:"Camisa Night Ops", preco:150, categoria:"colete", imagens:["imagens/c1.png"] },
  { id:38, nome:"Camisa Night Ops", preco:150, categoria:"colete", imagens:["imagens/c2.png"] },
  { id:39, nome:"Camisa Night Ops", preco:150, categoria:"colete", imagens:["imagens/c3.png"] },
  { id:40, nome:"Camisa Night Ops", preco:150, categoria:"colete", imagens:["imagens/c4.png"] },
  { id:41, nome:"Camisa Night Ops", preco:150, categoria:"colete", imagens:["imagens/c5.png"] },

  // CALÇA
  { id:42, nome:"Calça Nível I", preco:500, categoria:"calca", imagens:["imagens/ca1.png"] },
  { id:43, nome:"Calça Nível II", preco:850, categoria:"calca", imagens:["imagens/ca2.png"] },
  { id:44, nome:"Calça Nível III", preco:1200, categoria:"calca", imagens:["imagens/ca3.png"] },
  { id:45, nome:"Calça Blindada Pro", preco:1800, categoria:"calca", imagens:["imagens/ca4.png"] },
  { id:46, nome:"Calça Blindada Pro", preco:1800, categoria:"calca", imagens:["imagens/ca5.png"] },
  { id:47, nome:"Camisa Night Ops", preco:150, categoria:"calca", imagens:["imagens/ca7.png"] },
  { id:48, nome:"Camisa Night Ops", preco:150, categoria:"calca", imagens:["imagens/ca8.png"] },
  { id:49, nome:"Camisa Night Ops", preco:150, categoria:"calca", imagens:["imagens/ca9.png"] },
  { id:50, nome:"Camisa Night Ops", preco:150, categoria:"calca", imagens:["imagens/ca10.png"] },
  { id:51, nome:"Camisa Night Ops", preco:150, categoria:"calca", imagens:["imagens/ca11.png"] },
  { id:52, nome:"Camisa Night Ops", preco:150, categoria:"calca", imagens:["imagens/ca12.png"] },
  { id:53, nome:"Camisa Night Ops", preco:150, categoria:"calca", imagens:["imagens/ca13.png"] },
  { id:54, nome:"Camisa Night Ops", preco:150, categoria:"calca", imagens:["imagens/ca14.png"] },

  // JAQUETA
  { id:55, nome:"Jaqueta Nível I", preco:500, categoria:"jaqueta", imagens:["imagens/j1.png"] },
  { id:56, nome:"Jaqueta Nível II", preco:850, categoria:"jaqueta", imagens:["imagens/j2.png"] },
  { id:57, nome:"Jaqueta Nível III", preco:1200, categoria:"jaqueta", imagens:["imagens/j3.png"] },
  { id:58, nome:"Jaqueta Blindada Pro", preco:1800, categoria:"jaqueta", imagens:["imagens/j4.png"] },
  { id:59, nome:"Jaqueta Blindada Pro", preco:1800, categoria:"jaqueta", imagens:["imagens/j5.png"] },
  { id:60, nome:"Camisa Night Ops", preco:150, categoria:"jaqueta", imagens:["imagens/j6.png"] },
  { id:61, nome:"Camisa Night Ops", preco:150, categoria:"jaqueta", imagens:["imagens/j7.png"] },
  { id:62, nome:"Camisa Night Ops", preco:150, categoria:"jaqueta", imagens:["imagens/j8.png"] },
  { id:63, nome:"Camisa Night Ops", preco:150, categoria:"jaqueta", imagens:["imagens/j9.png"] },
  { id:64, nome:"Camisa Night Ops", preco:150, categoria:"jaqueta", imagens:["imagens/j10.png"] },
  { id:65, nome:"Camisa Night Ops", preco:150, categoria:"jaqueta", imagens:["imagens/j11.png"] },

  // MÁSCARA
  { id:66, nome:"Máscara Nível I", preco:500, categoria:"mascara", imagens:["imagens/m1.png"] },
  { id:67, nome:"Máscara Nível II", preco:850, categoria:"mascara", imagens:["imagens/m2.png"] },
  { id:68, nome:"Máscara Nível III", preco:1200, categoria:"mascara", imagens:["imagens/m3.png"] },
  { id:69, nome:"Máscara Blindada Pro", preco:1800, categoria:"mascara", imagens:["imagens/m4.png"] },
  { id:70, nome:"Máscara Blindada Pro", preco:1800, categoria:"mascara", imagens:["imagens/m5.png"] },
  { id:71, nome:"Camisa Night Ops", preco:150, categoria:"mascara", imagens:["imagens/m6.png"] },
  { id:72, nome:"Camisa Night Ops", preco:150, categoria:"mascara", imagens:["imagens/m7.png"] },
  { id:73, nome:"Camisa Night Ops", preco:150, categoria:"mascara", imagens:["imagens/m9.png"] },
  { id:74, nome:"Camisa Night Ops", preco:150, categoria:"mascara", imagens:["imagens/m10.png"] },
  { id:75, nome:"Camisa Night Ops", preco:150, categoria:"mascara", imagens:["imagens/m11.png"] },
  { id:76, nome:"Camisa Night Ops", preco:150, categoria:"mascara", imagens:["imagens/m12.png"] },
  { id:77, nome:"Camisa Night Ops", preco:150, categoria:"mascara", imagens:["imagens/m13.png"] },
  { id:78, nome:"Camisa Night Ops", preco:150, categoria:"mascara", imagens:["imagens/m14.png"] },

  // LUVA
  { id:79, nome:"Luva Nível I", preco:500, categoria:"luva", imagens:["imagens/l1.png"] },
  { id:80, nome:"Luva Nível II", preco:850, categoria:"luva", imagens:["imagens/l2.png"] },
  { id:81, nome:"Luva Nível III", preco:1200, categoria:"luva", imagens:["imagens/l3.png"] },
  { id:82, nome:"Luva Blindada Pro", preco:1800, categoria:"luva", imagens:["imagens/l4.png"] }
]








const carro = produtos.filter(p => p.categoria === "car");

function mostrarCarro() {
const container = document.getElementById("produtos");
container.innerHTML = "";
 
  carro.forEach(p => {
    container.innerHTML += `
    
  <div  class="border- cards p-5 sm:w-full border-2 rounded-lg border-blue-500">

  <div   class="cards cursor-pointer" data-id="${p.id}" onclick="abrirProduto(${p.id})">

    <div class="imagens w-72 h-72 overflow-hidden rounded-lg">
      <img class="w-full h-full object-" src="${p.imagens[0]}" alt="${p.nome}">
    </div>

    <p class="nome text-3xl text-white px-">${p.nome}</p>
    <p class="pat text-white text-1xl px-">A partir de</p>

    <div class="px- text-white flex justify-between preco">
      <p>R$ ${p.preco.toFixed(2)}</p>
      <p class="text-[16px] text-white"><del>R$ 199,90</del></p>
    </div>

    <p class="text-white text-[13px] px- gap-x-1 pb-3 flex items-center">
      <i data-lucide="zap" class="w-3 h-3 text-white"></i> Entrega Rapida
    </p>

    <div class="flex justify-between gap-5">

      <button class="border-2 p-2 px-7 border-blue-500 hover:bg-blue-500/30 transition-all text-white rounded-lg lg:px-7">COMPRA</button>

      <button 
        onclick="event.stopPropagation(); abrirDetalhes(${p.id})" 
        class="border-2 p-2 px-7 border-blue-500 hover:bg-blue-500/30 transition-all text-white rounded-lg lg:px-7"
      >
        DETALHES
      </button>

    </div>

  </div>
</div>

      
    `;
  });

  // ativa os ícones após inserir o HTML
  if (window.lucide && typeof lucide.createIcons === "function") {
    lucide.createIcons();
  }
}







function abrirDetalhes(id) {
  const p = produtos.find(x => x.id === id);
  if (!p) return;

  // remove modal antigo
  const antigo = document.getElementById("modal-detalhes");
  if (antigo) antigo.remove();

  // cria modal do zero
  const modal = document.createElement("div");
  modal.id = "modal-detalhes";

  modal.innerHTML = `
    <div class="modal-bg"></div>

    <div class="modal-box w-[100%] lg:w-[20%]">
      <button class="fechar">X</button>

      <h2>${p.nome}</h2>
      <p class="preco">R$ ${p.preco.toFixed(2)}</p>

      <div class="imagens">
        <img src="${p.imagens[0]}" class="img-detalhe">
      </div>

      <button  class="btn-add border-2 rounded-lg p-2 px-5 bg-blue-500/30 border-blue-600 " onclick="abrirProduto(${p.id})" >
        Compra
      </button>
    </div>
  `;

  document.body.appendChild(modal);

  // bloqueia scroll do fundo
  document.body.classList.add("modal-open");

  // fechar no X
  modal.querySelector(".fechar").onclick = () => {
    modal.remove();
    document.body.classList.remove("modal-open");
  };

  // fechar clicando no fundo
  modal.querySelector(".modal-bg").onclick = () => {
    modal.remove();
    document.body.classList.remove("modal-open");
  };
}


  



function abrirProduto(id) {
  window.location.href = `card.html?id=${id}`;
}


function carregarProdutoIndividual() {
  const box = document.getElementById("produto");
  if (!box) return; // se não estiver na página card.html, não roda

  const id = new URLSearchParams(window.location.search).get("id");
  const p = produtos.find(x => x.id == id);

  if (!p) {
    box.innerHTML = "<p>Produto não encontrado.</p>";
    return;
  }

  box.innerHTML = `
    <img src="${p.imagens[0]}" class="img-produto">

    <h1>${p.nome}</h1>

    <p class="preco">R$ ${p.preco.toFixed(2)}</p>

    <button class="btn" onclick="adicionarAoCarrinho(${p.id})">
      Comprar
    </button>
  `;

  lucide.createIcons();
}

carregarProdutoIndividual();















mostrarCarro();


const camisa = produtos.filter(p => p.categoria === "colete");

function mostrarCamisa() {
const container = document.getElementById("camisa");
container.innerHTML = "";

  camisa.forEach(p => {
    container.innerHTML += `
   <div  class="border- cards p-5 sm:w-full border-2 rounded-lg border-blue-500">

  <div class="cards cursor-pointer" data-id="${p.id}" onclick="abrirProduto(${p.id})">

    <div class="imagens w-72 h-72 overflow-hidden rounded-lg">
      <img class="w-full h-full object-" src="${p.imagens[0]}" alt="${p.nome}">
    </div>

    <p class="nome text-3xl text-white px-">${p.nome}</p>
    <p class="pat text-white text-1xl px-">A partir de</p>

    <div class="px- text-white flex justify-between preco">
      <p>R$ ${p.preco.toFixed(2)}</p>
      <p class="text-[16px] text-white"><del>R$ 199,90</del></p>
    </div>

    <p class="text-white text-[13px] px- gap-x-1 pb-3 flex items-center">
      <i data-lucide="zap" class="w-3 h-3 text-white"></i> Entrega Rapida
    </p>

    <div class="flex justify-between gap-5">

      <button 
        onclick="" 
        class="border-2 p-2 px-7 border-blue-500 hover:bg-blue-500/30 transition-all text-white rounded-lg lg:px-7"
      >
        COMPRA
      </button>

      <button 
        onclick="event.stopPropagation(); abrirDetalhes(${p.id})" 
        class="border-2 p-2 px-7 border-blue-500 hover:bg-blue-500/30 transition-all text-white rounded-lg lg:px-7"
      >
        DETALHES
      </button>

    </div>

  </div>
</div>
      
    `;
  });

  // ativa os ícones após inserir o HTML
  if (window.lucide && typeof lucide.createIcons === "function") {
    lucide.createIcons();
  }
}

mostrarCamisa();





const colete = produtos.filter(p => p.categoria === "pt");

function mostraColete() {
const container = document.getElementById("colete");
container.innerHTML = "";

  colete.forEach(p => {
    container.innerHTML += `
    
    <div  class="border- cards p-5 sm:w-full border-2 rounded-lg border-blue-500">

  <div class="cards cursor-pointer" data-id="${p.id}" onclick="abrirProduto(${p.id})">

    <div class="imagens w-72 h-72 overflow-hidden rounded-lg">
      <img class="w-72 h-full object-" src="${p.imagens[0]}" alt="${p.nome}">
    </div>

    <p class="nome text-3xl text-white px-">${p.nome}</p>
    <p class="pat text-white text-1xl px-">A partir de</p>

    <div class="px- text-white flex justify-between preco">
      <p>R$ ${p.preco.toFixed(2)}</p>
      <p class="text-[16px] text-white"><del>R$ 199,90</del></p>
    </div>

    <p class="text-white text-[13px] px- gap-x-1 pb-3 flex items-center">
      <i data-lucide="zap" class="w-3 h-3 text-white"></i> Entrega Rapida
    </p>

    <div class="flex justify-between gap-5">

      <button 
        onclick="" 
        class="border-2 p-2 px-7 border-blue-500 hover:bg-blue-500/30 transition-all text-white rounded-lg lg:px-7"
      >
        COMPRA
      </button>

      <button 
        onclick="event.stopPropagation(); abrirDetalhes(${p.id})" 
        class="border-2 p-2 px-7 border-blue-500 hover:bg-blue-500/30 transition-all text-white rounded-lg lg:px-7"
      >
        DETALHES
      </button>

    </div>

  </div>
</div>
      
    `;
  });

  // ativa os ícones após inserir o HTML
  if (window.lucide && typeof lucide.createIcons === "function") {
    lucide.createIcons();
  }
}


mostraColete();





const calca = produtos.filter(p => p.categoria === "calca");

function mostrarCalca() {
const container = document.getElementById("calca");
container.innerHTML = "";
 
  calca.forEach(p => {
    container.innerHTML += `
    
    <div  class="border- cards p-5 sm:w-full border-2 rounded-lg border-blue-500">

  <div class="cards cursor-pointer" data-id="${p.id}" onclick="abrirProduto(${p.id})">

    <div class="imagens w-72 h-72 overflow-hidden rounded-lg">
      <img class="w-full h-full object-" src="${p.imagens[0]}" alt="${p.nome}">
    </div>

    <p class="nome text-3xl text-white px-">${p.nome}</p>
    <p class="pat text-white text-1xl px-">A partir de</p>

    <div class="px- text-white flex justify-between preco">
      <p>R$ ${p.preco.toFixed(2)}</p>
      <p class="text-[16px] text-white"><del>R$ 199,90</del></p>
    </div>

    <p class="text-white text-[13px] px- gap-x-1 pb-3 flex items-center">
      <i data-lucide="zap" class="w-3 h-3 text-white"></i> Entrega Rapida
    </p>

    <div class="flex justify-between gap-5">

      <button 
        onclick="" 
        class="border-2 p-2 px-7 border-blue-500 hover:bg-blue-500/30 transition-all text-white rounded-lg lg:px-7"
      >
        COMPRA
      </button>

      <button 
        onclick="event.stopPropagation(); abrirDetalhes(${p.id})" 
        class="border-2 p-2 px-7 border-blue-500 hover:bg-blue-500/30 transition-all text-white rounded-lg lg:px-7"
      >
        DETALHES
      </button>

    </div>

  </div>
</div>
      
    `;
  });

  // ativa os ícones após inserir o HTML
  if (window.lucide && typeof lucide.createIcons === "function") {
    lucide.createIcons();
  }
}



mostrarCalca();




const jaqueta = produtos.filter(p => p.categoria === "jaqueta");

function mostrarJaqueta() {
const container = document.getElementById("jaqueta");
container.innerHTML = "";
 
  jaqueta.forEach(p => {
    container.innerHTML += `
    
    <div  class="border- cards p-5 sm:w-full border-2 rounded-lg border-blue-500">

  <div class="cards cursor-pointer" data-id="${p.id}" onclick="abrirProduto(${p.id})">

    <div class="imagens w-72 h-72 overflow-hidden rounded-lg">
      <img class="w-full h-full object-" src="${p.imagens[0]}" alt="${p.nome}">
    </div>

    <p class="nome text-3xl text-white px-">${p.nome}</p>
    <p class="pat text-white text-1xl px-">A partir de</p>

    <div class="px- text-white flex justify-between preco">
      <p>R$ ${p.preco.toFixed(2)}</p>
      <p class="text-[16px] text-white"><del>R$ 199,90</del></p>
    </div>

    <p class="text-white text-[13px] px- gap-x-1 pb-3 flex items-center">
      <i data-lucide="zap" class="w-3 h-3 text-white"></i> Entrega Rapida
    </p>

    <div class="flex justify-between gap-5">

      <button 
        onclick="" 
        class="border-2 p-2 px-7 border-blue-500 hover:bg-blue-500/30 transition-all text-white rounded-lg lg:px-7"
      >
        COMPRA
      </button>

      <button 
        onclick="event.stopPropagation(); abrirDetalhes(${p.id})" 
        class="border-2 p-2 px-7 border-blue-500 hover:bg-blue-500/30 transition-all text-white rounded-lg lg:px-7"
      >
        DETALHES
      </button>

    </div>

  </div>
</div>
      
    `;
  });

  // ativa os ícones após inserir o HTML
  if (window.lucide && typeof lucide.createIcons === "function") {
    lucide.createIcons();
  }
}







mostrarJaqueta();



const mascara = produtos.filter(p => p.categoria === "mascara");

function mostrarMascara() {
const container = document.getElementById("mascara");
container.innerHTML = "";
 
  mascara.forEach(p => {
    container.innerHTML += `
    
    <div  class="border- cards p-5 sm:w-full border-2 rounded-lg border-blue-500">

  <div class="cards cursor-pointer" data-id="${p.id}" onclick="abrirProduto(${p.id})">

    <div class="imagens w-72 h-72 overflow-hidden rounded-lg">
      <img class="w-full h-full object-" src="${p.imagens[0]}" alt="${p.nome}">
    </div>

    <p class="nome text-3xl text-white px-">${p.nome}</p>
    <p class="pat text-white text-1xl px-">A partir de</p>

    <div class="px- text-white flex justify-between preco">
      <p>R$ ${p.preco.toFixed(2)}</p>
      <p class="text-[16px] text-white"><del>R$ 199,90</del></p>
    </div>

    <p class="text-white text-[13px] px- gap-x-1 pb-3 flex items-center">
      <i data-lucide="zap" class="w-3 h-3 text-white"></i> Entrega Rapida
    </p>

    <div class="flex justify-between gap-5">

      <button 
        onclick="" 
        class="border-2 p-2 px-7 border-blue-500 hover:bg-blue-500/30 transition-all text-white rounded-lg lg:px-7"
      >
        COMPRA
      </button>

      <button 
        onclick="event.stopPropagation(); abrirDetalhes(${p.id})" 
        class="border-2 p-2 px-7 border-blue-500 hover:bg-blue-500/30 transition-all text-white rounded-lg lg:px-7"
      >
        DETALHES
      </button>

    </div>

  </div>
</div>
      
    `;
  });

  // ativa os ícones após inserir o HTML
  if (window.lucide && typeof lucide.createIcons === "function") {
    lucide.createIcons();
  }
}



mostrarMascara();



const luva = produtos.filter(p => p.categoria === "luva");

function mostrarLuva() {
const container = document.getElementById("luva");
container.innerHTML = "";
 
  luva.forEach(p => {
    container.innerHTML += `
    
  <div  class="border- cards p-5 sm:w-full border-2 rounded-lg border-blue-500">

  <div class="cards cursor-pointer" data-id="${p.id}" onclick="abrirProduto(${p.id})">

    <div class="imagens w-72 h-72 overflow-hidden rounded-lg">
      <img class="w-full h-full object-" src="${p.imagens[0]}" alt="${p.nome}">
    </div>

    <p class="nome text-3xl text-white px-">${p.nome}</p>
    <p class="pat text-white text-1xl px-">A partir de</p>

    <div class="px- text-white flex justify-between preco">
      <p>R$ ${p.preco.toFixed(2)}</p>
      <p class="text-[16px] text-white"><del>R$ 199,90</del></p>
    </div>

    <p class="text-white text-[13px] px- gap-x-1 pb-3 flex items-center">
      <i data-lucide="zap" class="w-3 h-3 text-white"></i> Entrega Rapida
    </p>

    <div class="flex justify-between gap-5">

      <button 
        onclick="" 
        class="border-2 p-2 px-7 border-blue-500 hover:bg-blue-500/30 transition-all text-white rounded-lg lg:px-7"
      >
        COMPRA
      </button>

      <button 
        onclick="event.stopPropagation(); abrirDetalhes(${p.id})" 
        class="border-2 p-2 px-7 border-blue-500 hover:bg-blue-500/30 transition-all text-white rounded-lg lg:px-7"
      >
        DETALHES
      </button>

    </div>

  </div>
</div>
      
    `;
  });

  // ativa os ícones após inserir o HTML
  if (window.lucide && typeof lucide.createIcons === "function") {
    lucide.createIcons();
  }
}

mostrarLuva();







function contar(filtre) {
  if (filtre === "all") return produtos.length;
  return produtos.filter(p => p.categoria === filtre).length;
}

function atualizarContagem() {
  document.getElementById("c-all").textContent = contar("all");
  document.getElementById("c-pt").textContent = contar("pt");
  document.getElementById("c-car").textContent = contar("car");
  document.getElementById("c-colete").textContent = contar("colete");
  document.getElementById("c-calca").textContent = contar("calca");
  document.getElementById("c-jaqueta").textContent = contar("jaqueta");
  document.getElementById("c-mascara").textContent = contar("mascara");
  document.getElementById("c-luva").textContent = contar("luva");
}

atualizarContagem();

function filtrarPorCategoria(cat) {
  const titulo = document.getElementById("tituloCategoria");
  const sectionTodos = document.getElementById("todos");
  const resultado = document.getElementById("resultadoFiltro");

  const categorias = ["produtos","colete","camisa","calca","jaqueta","mascara","luva","cal","ja","ma","lu","ca","cas"];
  
  const nomes = {
    pt: "ARMAS",
    car: "CAMISAS",
    colete: "COLETES",
    calca: "CALÇAS",
    jaqueta: "JAQUETA",
    mascara: "MASCARA/CHAPÉU",
    luva: "LUVA",
    all: "TODOS"
  };

  titulo.innerText = nomes[cat] || "TODOS";

  // Esconde todas as categorias
  categorias.forEach(id => {
    const el = document.getElementById(id);
    if(el) el.style.display = "none";
  });

  // Se for "all", mostra tudo
  if(cat === "all") {
    categorias.forEach(id => {
      const el = document.getElementById(id);
      if(el) el.style.display = (id === "cal" || id === "ja" || id === "ma" || id === "lu" || id === "ca" || id === "cas") ? "flex" : "grid";
    });
    if(resultado) resultado.style.display = "none";
    scrollPara("todos");
    AOS.refreshHard();
    return;
  }

  // Para outros filtros, mostra apenas o container de resultados
  if(!resultado) {
    const container = document.createElement("div");
    container.id = "resultadoFiltro";
    container.className = "grid grid-cols-1 md:grid-cols-3 gap-6 mt-10";
    titulo.insertAdjacentElement("afterend", container);
  } else {
    resultado.innerHTML = "";
    resultado.style.display = "grid";
  }

  const container = document.getElementById("resultadoFiltro");
  const lista = produtos.filter(p => p.categoria === cat);

  lista.forEach(p => {
    container.innerHTML += `
      <div class="border- cards p-5 sm:w-full border-2 rounded-lg border-blue-500">
        <div class="cards cursor-pointer" data-id="${p.id}" onclick="abrirProduto(${p.id})">
          <div class="imagens w-72 h-72 overflow-hidden rounded-lg">
            <img class="w-full h-full object-" src="${p.imagens[0]}" alt="${p.nome}">
          </div>
          <p class="nome text-3xl text-white px-">${p.nome}</p>
          <p class="pat text-white text-1xl px-">A partir de</p>
          <div class="px- text-white flex justify-between preco">
            <p>R$ ${p.preco.toFixed(2)}</p>
            <p class="text-[16px] text-white"><del>R$ 199,90</del></p>
          </div>
          <p class="text-white text-[13px] px- gap-x-1 pb-3 flex items-center">
            <i data-lucide="zap" class="w-3 h-3 text-white"></i> Entrega Rapida
          </p>
          <div class="flex justify-between gap-5">
            <button class="border-2 p-2 px-7 border-blue-500 hover:bg-blue-500/30 transition-all text-white rounded-lg lg:px-7">COMPRA</button>
            <button onclick="event.stopPropagation(); abrirDetalhes(${p.id})" class="border-2 p-2 px-7 border-blue-500 hover:bg-blue-500/30 transition-all text-white rounded-lg lg:px-7">DETALHES</button>
          </div>
        </div>
      </div>
    `;
  });

  if(window.lucide && typeof lucide.createIcons === "function") {
    lucide.createIcons();
  }

  scrollPara("todos");
}

// Scroll que considera header fixo
function scrollPara(sectionId) {
  const element = document.getElementById(sectionId);
  const header = document.querySelector("header");
  const headerHeight = header ? header.offsetHeight : 0;

  if(element) {
    const offset = element.offsetTop - headerHeight;
    window.scrollTo({ top: offset, behavior: "smooth" });
  }
}


function filtrarPorCategoriaa(cat) {
  const titulo = document.getElementById("tituloCategoria");
  const sectionTodos = document.getElementById("todos");
  const resultado = document.getElementById("resultadoFiltro");

  const categorias = ["produtos","colete","camisa","calca","jaqueta","mascara","luva","cal","ja","ma","lu","ca","cas"];
  
  const nomes = {
    pt: "ARMAS",
    car: "CAMISAS",
    colete: "COLETES",
    calca: "CALÇAS",
    jaqueta: "JAQUETA",
    mascara: "MASCARA/CHAPÉU",
    luva: "LUVA",
    all: "TODOS"
  };

  titulo.innerText = nomes[cat] || "TODOS";

  // Esconde todas as categorias
  categorias.forEach(id => {
    const el = document.getElementById(id);
    if(el) el.style.display = "none";
  });

  // Se for "all", mostra tudo
  if(cat === "all") {
    categorias.forEach(id => {
      const el = document.getElementById(id);
      if(el) el.style.display = (id === "cal" || id === "ja" || id === "ma" || id === "lu" || id === "ca" || id === "cas") ? "flex" : "grid";
    });
    if(resultado) resultado.style.display = "none";
    scrollPara("todos");
    AOS.refreshHard();
    return;
  }

  // Para outros filtros, mostra apenas o container de resultados
  if(!resultado) {
    const container = document.createElement("div");
    container.id = "resultadoFiltro";
    container.className = "grid grid-cols-1 md:grid-cols-3 gap-6 mt-10";
    titulo.insertAdjacentElement("afterend", container);
  } else {
    resultado.innerHTML = "";
    resultado.style.display = "grid";
  }

  const container = document.getElementById("resultadoFiltro");
  const lista = produtos.filter(p => p.categoria === cat);

  lista.forEach(p => {
    container.innerHTML += `
      <div class="border- cards p-5 sm:w-full border-2 rounded-lg border-blue-500">
        <div class="cards cursor-pointer" data-id="${p.id}" onclick="abrirProduto(${p.id})">
          <div class="imagens w-72 h-72 overflow-hidden rounded-lg">
            <img class="w-full h-full object-" src="${p.imagens[0]}" alt="${p.nome}">
          </div>
          <p class="nome text-3xl text-white px-">${p.nome}</p>
          <p class="pat text-white text-1xl px-">A partir de</p>
          <div class="px- text-white flex justify-between preco">
            <p>R$ ${p.preco.toFixed(2)}</p>
            <p class="text-[16px] text-white"><del>R$ 199,90</del></p>
          </div>
          <p class="text-white text-[13px] px- gap-x-1 pb-3 flex items-center">
            <i data-lucide="zap" class="w-3 h-3 text-white"></i> Entrega Rapida
          </p>
          <div class="flex justify-between gap-5">
            <button class="border-2 p-2 px-7 border-blue-500 hover:bg-blue-500/30 transition-all text-white rounded-lg lg:px-7">COMPRA</button>
            <button onclick="event.stopPropagation(); abrirDetalhes(${p.id})" class="border-2 p-2 px-7 border-blue-500 hover:bg-blue-500/30 transition-all text-white rounded-lg lg:px-7">DETALHES</button>
          </div>
        </div>
      </div>
    `;
  });

  if(window.lucide && typeof lucide.createIcons === "function") {
    lucide.createIcons();
  }

  // scrollPara("todos");
}





const toggle = document.getElementById("toggleCategorias");

toggle.addEventListener("click", () => {
  const menu = toggle.nextElementSibling;
  const seta = document.getElementById("seta");

  menu.classList.toggle("hidden");

  seta.style.transform = menu.classList.contains("hidden") ? "rotate(0deg)" : "rotate(180deg)";
});





  lucide.createIcons();

 
const sidebar = document.getElementById("sidebar");
  const toggleBtn = document.querySelector(".toggle-btn");
  const closeBtn = document.getElementById("closeSidebar");
  const listaCategorias = document.getElementById("listaCategorias")

  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("translate-x-full"); // abre
  });

  closeBtn.addEventListener("click", () => {
    sidebar.classList.add("translate-x-full"); // fecha
  });



  const botao = document.querySelectorAll(".todos")

botao.forEach(btn => {
  btn.addEventListener("click", () => {
    sidebar.classList.toggle("translate-x-full")
    
    
  });

  });



document.querySelectorAll('.scroll-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    
    // rolagem lenta personalizada
    window.scrollTo({
      top: target.offsetTop,
     
    });
  });
});




const btnCat = document.getElementById("btnCategorias");
const setaCat = document.getElementById("setaCat");

btnCat.onclick = function () { 
  const caixa = this.nextElementSibling;
  caixa.classList.toggle("hidden");
  setaCat.style.transform = caixa.classList.contains("hidden")
    ? "rotate(0deg)"
    : "rotate(180deg)";
};

// fechar depois de filtrar
document.querySelectorAll("#boxCategorias button").forEach(b => {
  b.addEventListener("click", () => {

    // 1 — filtra primeiro
    const categoria = b.getAttribute("onclick")
                     .match(/\('(.+?)'\)/)[1];
    filtrarPorCategoriaa(categoria);

    // 2 — fecha o menu
    const caixa = btnCat.nextElementSibling;
    caixa.classList.add("hidden");
    setaCat.style.transform = "rotate(0deg)";
  });
});



