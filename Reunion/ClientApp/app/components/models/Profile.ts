import { IProfile} from './IProfile';

export class Profile
{
    public Id: string;
    public ImageId: string;
    public FirstName: string;
    public LastName: string;
    public MiddleInitial: string;
    public Branch: string;
    public Location: string;
    public Email: string;
    public Activated: boolean;
    public RollNumber: string;
    public PhoneNumber: string;
    public Story: string;
    public Code: string;
    public Profession: string;
    public YearOfJoining: string;
    public Admin: boolean;
    public PlaceHolder3: string;

    constructor(
        Id: string,
        ImageId: string,
        FirstName: string,
        LastName: string,
        MiddleInitial: string,
        Branch: string,
        Location: string,
        Email: string,
        Activated: boolean,
        RollNumber: string,
        PhoneNumber: string,
        Story: string,
        Code: string,
        Profession: string,
        YearOfJoining: string,
        Admin: boolean,
        PlaceHolder3: string
    ) {

        Id = Id;
        ImageId = ImageId;
        FirstName = FirstName;
        LastName = LastName;
        MiddleInitial = MiddleInitial;
        Branch = Branch;
        Location = Location;
        Email = Email;
        Activated = Activated;
        RollNumber = RollNumber;
        PhoneNumber = PhoneNumber;
        Story = Story;
        Code = Code;
        Profession = Profession;
        YearOfJoining = YearOfJoining;
        Admin = Admin;
    }
}