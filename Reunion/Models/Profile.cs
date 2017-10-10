using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reunion
{
    public class Profile
    {
        public Guid Id { get; set; }

        public Guid ImageId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string MiddleInitial { get; set; }

        public string Branch { get; set; }

        public string YearOfJoining { get; set; }

        public string Location { get; set; }

        public string Email { get; set; }

        public bool Activated { get; set; }

        public string RollNumber { get; set; }

        public string PhoneNumber { get; set; }
        public string Story { get; set; }
        public string Code { get; set; }

        public string Profession { get; set; }
        public bool Admin { get; set; }

        public string PlaceHolder3 { get; set; }


    }
}
