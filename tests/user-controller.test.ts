// tests/api.spec.ts
import { test, expect } from '@playwright/test';
import {StatusCodes} from "http-status-codes";
let baseURL: string = 'http://localhost:3000/users';

test.describe('User management API', () => {
    test('find user: should return a user by ID', async ({ request }) => {
        const responseCreate = await request.post(`${baseURL}`);
        const responseBody = await responseCreate.json()
        expect(responseCreate.status()).toBe(StatusCodes.CREATED);
        const responseGet = await request.get(`${baseURL}/${responseBody.id}`);
        expect(responseGet.status()).toBe(StatusCodes.OK);
    });

    test('find user: should return 404 if user not found', async ({ request }) => {
        const response = await request.get(`${baseURL}/1000`);
        expect(response.status()).toBe(StatusCodes.NOT_FOUND);
    });

    test('create user: should add a new user', async ({ request }) => {
        const responseCreate = await request.post(`${baseURL}`);
        const responseBody = await responseCreate.json()
        expect.soft(responseCreate.status()).toBe(StatusCodes.CREATED);
        expect.soft(responseBody.id).toBeDefined();
    });

    test('delete user: should delete a user by ID', async ({ request }) => {
        const responseCreate = await request.post(`${baseURL}`);
        const responseBody = await responseCreate.json()
        expect(responseCreate.status()).toBe(201);
        const responseDelete = await request.delete(`${baseURL}/${responseBody.id}`);
        expect(responseDelete.status()).toBe(StatusCodes.OK);
    });

    test('delete user: should return 404 if user not found', async ({ request }) => {
        const responseDelete = await request.delete(`${baseURL}/99`);
        expect(responseDelete.status()).toBe(StatusCodes.NOT_FOUND);
    });

    test('create user and return all fields', async ({ request }) => {
        const responseCreate = await request.post(`${baseURL}`);
        const responseBody = await responseCreate.json()
        expect.soft(responseCreate.status()).toBe(StatusCodes.CREATED);
        expect.soft(responseBody.id).toBeDefined();
        expect.soft(responseBody.name).toBeDefined();
        expect.soft(responseBody.email).toBeDefined();
        expect.soft(responseBody.phone).toBeDefined();
    });
});
