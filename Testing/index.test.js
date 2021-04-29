import {getByText} from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'
import { JSDOM } from 'jsdom'
import fs from 'fs'
import path from 'path'


const html = fs.readFileSync(path.resolve(__dirname, '../Front-End/index.html'), 'utf8');
const {MongoClient} = require('mongodb');
const token = Math.random().toString(36);
let dom
let container

describe('Testing UI Elements', () => {
    beforeEach(() => {
        dom = new JSDOM(html, { runScripts: 'dangerously' })
        container = dom.window.document.body
    })

    it('check if page contains a Header', () => {
        expect(container.querySelector('h1')).not.toBeNull()
        expect(getByText(container, 'Dashboard')).toBeInTheDocument()
    })

    it('check if page contains Chart 01', () => {
        expect(getByText(container, 'Chart 01')).toBeInTheDocument()
    })

    it('check if page contains Chart 02', () => {
        expect(getByText(container, 'Chart 02')).toBeInTheDocument()
    })

    it('check if page contains Chart 03', () => {
        expect(getByText(container, 'Chart 03')).toBeInTheDocument()
    })

    it('check if page contains a Refresh Button', () => {
        expect(container.querySelector('button')).not.toBeNull()
        expect(getByText(container, 'Refresh')).toBeInTheDocument()
    })

})

describe('Testing Remote MongoDB Connectivity', () => {

    let connection;
    let db;

    beforeAll(async () => {
        const __MONGO_URI__ = `mongodb+srv://harsh:password13@cluster0.eu19p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
        const __MONGO_DB_NAME__ = `myFirstDatabase`
        connection = await MongoClient.connect(__MONGO_URI__, {
            useNewUrlParser: true,
        });
        db = await connection.db(__MONGO_DB_NAME__);
    });

    afterAll(async () => {
        await connection.close();
        await db.close();
    });

    it('insert and verify database connectivity and integrity', async () => {
        const testCon = db.collection('testCon');

        const testData = {_id: token, string: 'testing_data'};
        await testCon.insertOne(testData);

        const insertedData = await testCon.findOne({_id: token});
        expect(insertedData).toEqual(testData);
    });

})

