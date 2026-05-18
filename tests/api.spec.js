const { test, expect } = require('@playwright/test');

test('GET - ambil list posts', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/posts');
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.length).toBeGreaterThan(0);
  console.log('Total posts:', body.length);
});

test('GET - ambil single post', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.id).toBe(1);
  expect(body.title).toBeTruthy();
  console.log('Post:', body);
});

test('POST - buat post baru', async ({ request }) => {
  const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
    data: {
      title: 'Belajar Playwright',
      body: 'API testing sangat mudah',
      userId: 1
    }
  });
  expect(response.status()).toBe(201);
  const body = await response.json();
  expect(body.title).toBe('Belajar Playwright');
  console.log('Post dibuat:', body);
});

test('PUT - update post', async ({ request }) => {
  const response = await request.put('https://jsonplaceholder.typicode.com/posts/1', {
    data: {
      title: 'Judul Diupdate',
      body: 'Isi diupdate',
      userId: 1
    }
  });
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.title).toBe('Judul Diupdate');
  console.log('Post diupdate:', body);
});

test('DELETE - hapus post', async ({ request }) => {
  const response = await request.delete('https://jsonplaceholder.typicode.com/posts/1');
  expect(response.status()).toBe(200);
});