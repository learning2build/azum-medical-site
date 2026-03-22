Learnings for me the user:
    L;DR: 127.0.0.1 is the numeric address for “this computer”; localhost is the name for it. They both work now because the server listens on all interfaces instead of only on 127.0.0.1, so whichever way the browser resolves localhost, it can connect.
    127.0.0.1 is an IP address. It’s the “loopback” address: it always means “this machine.” When you open http://127.0.0.1:3000, the browser connects directly to that address.
    localhost is a hostname. It’s a name that gets turned into an IP address by your system (via DNS/hosts). On most Macs it’s set up to mean “this machine” too—so it usually becomes either 127.0.0.1 (IPv4) or ::1 (IPv6).
