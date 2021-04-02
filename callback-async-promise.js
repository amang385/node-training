
    // callback
    const posts = [
        {title: 'post 1', des: 'am lorem 1'},
        {title: 'post 2', des: 'am lorem 2'},
    ]

    function getPosts() {
        console.log(posts);
    }

    function createPost(title, des, callback) {
        setTimeout(() => {
            posts.push({
            title,
            des,
        })
        callback();
        }, 1000);

    }
    createPost('post 3', 'am lorem 3', getPosts)


    // promise 
    const promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve('promise1 success');
        }, 2000);
        const status = true
        if (!status) {
            return reject('promise1 error')
        }
    });

    const promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve('promise2 success');
        }, 1000);
        const status = true
        if (!status) {
            return reject('promise2 error')
        }
    });

    const promise3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve('promise3 success');
        }, 1000);
        const status = true
        if (!status) {
            return reject('promise2 error')
        }
    });

    let res = 'am  string res : '
    promise1.then(result => console.log(result)).catch(err => console.log(err))
    promise2.then(result => console.log(result)).catch(err => console.log(err))
    promise3.then(result => {
        res += result
        console.log(result)
    }).catch(err => {
        console.log(err)
    })

    console.log('before promise all res : '+ res);

    Promise.all([promise1, promise2, promise3])
    .then(result => {
        console.log('after promise all res'+ res);
    })
    .catch(err => console.log(err))


    // async await
    const func1 = () => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('am promise');
                return resolve('promise success');
            }, 1000);
            const status = true
            if (!status) {
                return reject('promise2 error')
            }
        });
        return promise
    }

    const main = async () => {
        const result = await func1()
        console.log('am main');

    }

    main()