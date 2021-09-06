import app from "~/server-middleware/rest";

const request = require('supertest');

describe('Commits', () => {
    describe('GET /commits', () => {
        it('should expose a list of commits', async () => {
            // When
            const response = await request(app).get('/commits')

            // Then
            expect(response.status).toEqual(200)
        });
    });

    describe('POST /commits', () => {
        it('should expose a list of commits', async () => {
            // When
            const response = await request(app).post('/commits').send({
                "commit": "3e9e3ab58443a20ef6090c94535cd7d02a12b129",
                "abbreviated_commit": "3e9e3ab",
                "tree": "2eab3112838b03be0ed3d2bf09f5759bbc821706",
                "abbreviated_tree": "2eab311",
                "parent": "5376dfcb90b850cd3ee07e0fef7c2892dc98d3ac",
                "abbreviated_parent": "5376dfc",
                "refs": "HEAD -> master",
                "encoding": "",
                "subject": "WIP",
                "sanitized_subject_line": "WIP", 
                "body": "",
                "commit_notes": "",
                "verification_flag": "N",
                "signer": "",
                "signer_key": "",
                "author": {
                  "name": "Adrien SAUNIER",
                  "email": "",
                  "date": "Mon, 6 Sep 2021 14:25:23 +0200"
                },
                "commiter": {
                  "name": "Adrien SAUNIER",
                  "email": "",
                  "date": "Mon, 6 Sep 2021 14:25:23 +0200"
                }
              });

            // Then
            expect(response.status).toEqual(201)
        });
    });
})