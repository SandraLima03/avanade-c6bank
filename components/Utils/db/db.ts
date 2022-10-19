import TypeDb from "../../../types/TypeDB"

{/*type TypeDb = {
    id: number;
    date: string;
    description: string;
    amount: number;
    type: string;
    operation?: string;
  };*/}

const db: Array<TypeDb> = [
    {
        id: 1,
        type: "pix",
        amount: 100,
        date: '2022-10-19',
        description: 'Pizza com a galera',
        operation: 'credit'
    },

    {
        id: 2,
        type: "debit",
        amount: 40,
        date: '2022-10-19',
        description: 'Gasolina',
        operation: 'debit'
    },

    {
        id: 3,
        type: "ted",
        amount: 150000,
        date: '2022-10-19',
        description: 'Salário',
        operation: 'credit'
    },
   
];

export default db;