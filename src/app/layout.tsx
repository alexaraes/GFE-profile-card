import '../css/global.css';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className="bg-gray-200">{children}</body>
        </html>
    )
}