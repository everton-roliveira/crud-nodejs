'use strict';

exports.get = async (request = new Request(), response = new Response()) => {
    response.status(200).send(
        {
            body: 'Funcionando'
        }
    )
}