<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
    <html>
        <body>
            <h1>Assignment - XSLT</h1>
            <h2>FOR EACH</h2>
            <table border="1">
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                </tr>
                <xsl:for-each select="books/book">
                    <tr>
                        <td><xsl:value-of select="title"/></td>
                        <td><xsl:value-of select="author"/></td>
                    </tr>
                </xsl:for-each>
            </table>

            <h2>FOR EACH - Category Java</h2>
            <table border="1">
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                </tr>
                <xsl:for-each select="books/book[@category='Java']">
                    <tr>
                        <td><xsl:value-of select="title"/></td>
                        <td><xsl:value-of select="author"/></td>
                    </tr>
                </xsl:for-each>
            </table>

            <h2>IF PRICE Greater Than 500</h2>
            <table border="1">
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                </tr>
                <xsl:for-each select="books/book">
                    <xsl:if test="price &gt; 500">
                        <tr>
                            <td><xsl:value-of select="title"/></td>
                            <td><xsl:value-of select="author"/></td>
                        </tr>
                    </xsl:if>
                </xsl:for-each>
            </table>

        <h1>Assignment - X Path</h1>
            <p>Selecting Title of First Book : <xsl:value-of select="/books/book[1]/title"/></p>
            <p>Selecting Price of First Book : <xsl:value-of select="/books/book[1]/price"/></p>
            <p>Selecting Title of Second Book : <xsl:value-of select="/books/book[2]/title"/></p>
            <p>Selecting Price of Second Book : <xsl:value-of select="/books/book[2]/price"/></p>
            <p>Selecting All the child elements of Books </p>
            <xsl:value-of select="/books/*"/>
 	
        </body>
    </html>
</xsl:template>
</xsl:stylesheet>
