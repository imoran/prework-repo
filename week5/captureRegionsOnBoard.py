class Solution:
    # @param A : list of list of chars
    def solve(self, board):
        m = len(board)
        if m == 0:
            return
        n = len(board[0])
        if n == 0:
            return

        uf = UF(m * n + 1)

        for i in range(0, m):
            if board[i][0] != 'X':
                uf.connect(i * n, m * n)
            if board[i][n - 1] != 'X':
                uf.connect((i * n) + n - 1, m * n)
        for j in range(0, n):
            if board[0][j] != 'X':
                uf.connect(j, m * n)
            if board[m - 1][j] != 'X':
                uf.connect(((m - 1) * n) + j, m * n)

        d = [(-1, 0), (0, -1), (1, 0), (0, 1)]

        for i in range(1, m):
            for j in range(1, n):
                if board[i][j] != 'X':
                    for dir in d:
                        if 0 <= i + dir[0] < m and 0 <= j + dir[1] < n and board[i + dir[0]][j + dir[1]] != 'X':
                            # Connect node with ajacent open node
                            uf.connect(i * n + j, (i + dir[0]) * n + j + dir[1])

        for i in range(m):
            for j in range(n):
                if not uf.connected(i * n + j, m * n):
                    board[i][j] = 'X'


        return board


class UF:
    def __init__(self, n):
        self.parent = []
        for i in range(n):
            self.parent.append(i)

        self.rank = [0] * n

    def connect(self, a, b):
        i = self.find(a)
        j = self.find(b)

        if i == j:
            return
        if self.rank[i] <= self.rank[j]:
            self.rank[j] += 1
            self.parent[i] = self.parent[j]
        else:
            self.rank[i] += 1
            self.parent[j] = self.parent[i]

    def connected(self, a, b):
        return self.find(a) == self.find(b)

    def find(self, p):
        while self.parent[p] != p:
            self.parent[p] = self.parent[self.parent[p]]
            p = self.parent[p]

        return p
