console.log('hello');
const net = require('net');

// The port on which the server is listening.
const port = 8124;

// Create a new TCP server.
const server = net.createServer((connection) => {
  console.log('client connected');

  connection.on('end', () => {
    console.log('client disconnected');
  });

  // Now that a TCP connection has been established, the server can send data to
  // the client by writing to its socket.
  connection.write('Hello World!\r\n');
  connection.pipe(connection);
});

// The server listens to a socket for a client to make a connection request.
// Think of a socket as an end point.
server.listen(port, () => {
  console.log('server is listening');
});

//  Зачем в приложении строчка `connection.****(connection);`
// On Windows, the local domain is
/**
 * On Windows, the local domain is implemented using a named pipe.
 * The path must refer to an entry in \\?\pipe\ or \\.\pipe\.
 * Any characters are permitted, but the latter may do some
 * processing of pipe names, such as resolving .. sequences.
 * Despite how it might look, the pipe namespace is flat.
 * Pipes will not persist. They are removed when the last
 * reference to them is closed. Unlike Unix domain sockets,
 *  Windows will close and remove the pipe when the owning
 * process exits.
 */
