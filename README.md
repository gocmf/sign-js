# gocmf-sign

a signature library for gocmf.

## Node.js (Install)

Requirements:

- Node.js
- npm (Node.js package manager)

```bash
npm install @gocmf/sign
```

### Usage

ES6 import for typical API call signing use case:

```javascript
import sign from '@gocmf/sign'
const params = {
    name: 'gouguoyin',
    age: 18,
    sex: ''
}
const secretKey = 'gocmf'
const timestamp = Date.now()
const signature = sign.generate(params, secretKey, timestamp);
```
