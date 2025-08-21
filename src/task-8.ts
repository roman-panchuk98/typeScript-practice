enum Role {
  Admin,
  User,
  Guest,
}

// Тип функції: приймає Role і повертає масив рядків
function getPermissions(role: Role): string[] {
  switch (role) {
    case Role.Admin:
      return ["create", "read", "update", "delete"];
    case Role.User:
      return ["read", "update"];
    case Role.Guest:
      return ["read"];
    default:
      // TypeScript гарантує, що сюди не можна передати інше значення
      return [];
  }
}

// Приклади використання:
console.log(getPermissions(Role.Admin)); // ["create", "read", "update", "delete"]
console.log(getPermissions(Role.User)); // ["read", "update"]
console.log(getPermissions(Role.Guest)); // ["read"]

// TypeScript не дозволить:
// getPermissions("SuperAdmin"); // ❌ Помилка: Argument of type '"SuperAdmin"' is not assignable to parameter of type 'Role'.
